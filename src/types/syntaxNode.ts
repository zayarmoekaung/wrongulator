import { NodeType } from "./nodeType";

interface SyntaxNode {
    type: NodeType;
    value?: string;
    children?: SyntaxNode[];
}

export type { SyntaxNode };