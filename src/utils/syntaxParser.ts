import type { SyntaxNode } from "../types/syntaxNode";

export default function parseSyntaxTree(syntaxTree: SyntaxNode[] | null): string {
    if (!syntaxTree || syntaxTree.length === 0) {
        return '';
    }

    const parseNode = (node: SyntaxNode): string => {
        if (node.type === 'number' || node.type === 'operator') {
            return node.value || '';
        } else if (node.type === 'parenthesis') {
            if (node.value === '()') {
               const childrenStr = node.children ? node.children.map(parseNode).join('') : '';
                return `(${childrenStr})`;
            } else {
                if (node.children && node.children.length > 0) {
                    const childrenStr = node.children.map(parseNode).join('');
                    return `(${childrenStr}`;
                }
                return node.value || '';
            }
        }
        return '';
    };

    return syntaxTree.map(parseNode).join('');
}