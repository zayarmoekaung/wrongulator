interface SyntaxNode {
    type: 'number'| 'operator' | 'parenthesis';
    value?: string;
    children?: SyntaxNode[];
}

export type { SyntaxNode };