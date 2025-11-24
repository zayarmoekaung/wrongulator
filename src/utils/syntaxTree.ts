import type { SyntaxNode } from "../types/syntaxNode";
import { NodeType } from "../types/nodeType";

export const pushToTree = (tree: SyntaxNode[], node: SyntaxNode): SyntaxNode[] => {
    const push = (t: SyntaxNode[], n: SyntaxNode) => {
        const last = t[t.length - 1];
        const isNumberNode = (n?: SyntaxNode) => !!n && (n as any).type === NodeType.NUMBER;
        const isParenthesisNode = (n?: SyntaxNode) => !!n && (n as any).type === NodeType.PARENTHESIS;
        if (isNumberNode(last) && isNumberNode(n)) {
            const merged = {
                ...(last as any),
                value: (isValueZero(String((last as any).value)) && String((n as any).value)!== '.' ) ? String((n as any).value) : String((last as any).value) + String((n as any).value),
            } as SyntaxNode;
            return [...t.slice(0, -1), merged];
        } else if (isParenthesisNode(last) && last.value === '(') {
            if (isParenthesisNode(n) && n.value === ')') {
                last.value = '()';
                return [...t.slice(0, -1), last];
            }
            last.children = push(last.children || [], n);
            return [...t.slice(0, -1), last];
        }
        return [...t, n];
    };
    const newTree = tree ? push(tree, node) : [node];
    return newTree;
}
export const popFromTree = (tree: SyntaxNode[]): SyntaxNode[] => {
    if (tree.length === 0) return tree;
    const newTree = [...tree];
    const last = newTree[newTree.length - 1];
    if (last.children && last.children.length > 0) {
        last.children = popFromTree(last.children);
        newTree[newTree.length - 1] = last;
        return newTree;
    } else if (last.type === NodeType.NUMBER && last.value && last.value.length > 1) {
        last.value = last.value.slice(0, -1);
        newTree[newTree.length - 1] = last;
        return newTree;
    } else {
        return newTree.slice(0, -1);
    }
}
const isValueZero = (value: string): boolean => {
    const floatValue = parseFloat(value);
    return floatValue === 0 && !value.includes('.');
}