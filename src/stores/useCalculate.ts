import { create } from "zustand";
import type { SyntaxNode } from "../types/syntaxNode";

interface CalculateState {
    syntaxTree: SyntaxNode[] | null;
    setSyntaxTree: (tree: SyntaxNode[]) => void;
    addValueToSyntaxTree: (node: SyntaxNode) => void;
    clearSyntaxTree: () => void;
    deleteLastFromSyntaxTree: () => void;
}
export const useCalculate = create<CalculateState>((set) => ({
    syntaxTree: null,
    setSyntaxTree: (tree: SyntaxNode[]) => set({ syntaxTree: tree }),
    addValueToSyntaxTree: (node: SyntaxNode) =>
        set((state) => {
            const pushToTree = (t: SyntaxNode[],n: SyntaxNode) => { 
                const last = t[t.length - 1];
                const isNumberNode = (n?: SyntaxNode) => !!n && (n as any).type === 'number';
                const isParenthesisNode = (n?: SyntaxNode) => !!n && (n as any).type === 'parenthesis'
                if (isNumberNode(last) && isNumberNode(n)) {
                    const merged = {
                        ...(last as any),
                        value: String((last as any).value) + String((n as any).value),
                    } as SyntaxNode;
                    return [...t.slice(0, -1), merged];
                }else if (isParenthesisNode(last) && last.value === '(') {
                    if (isParenthesisNode(n) && n.value === ')') {
                        last.value = '()';
                        return [...t.slice(0, -1), last];
                    }
                    last.children = pushToTree(last.children || [], n);
                    return [...t.slice(0, -1), last];
                }
                return [...t, n];
            };
            const newTree = state.syntaxTree ? pushToTree(state.syntaxTree, node) : [node];
            return { syntaxTree: newTree };
        }),
    clearSyntaxTree: () => set({ syntaxTree: null }),
    deleteLastFromSyntaxTree: () =>
        set((state) => ({
            syntaxTree: state.syntaxTree ? state.syntaxTree.slice(0, -1) : null,   
        }
        )),
}));