import { create } from "zustand";
import type { SyntaxNode } from "../types/syntaxNode";
interface SyntaxState {
    syntaxTree: SyntaxNode[] | null;
    setSyntaxTree: (tree: SyntaxNode[]) => void;
    clearSyntaxTree: () => void;
    deleteLastFromSyntaxTree: () => void;
}
export const useSyntax = create<SyntaxState>((set) => ({
    syntaxTree: null,
    setSyntaxTree: (tree: SyntaxNode[]) => set({ syntaxTree: tree }),
    clearSyntaxTree: () => set({ syntaxTree: null }),
    deleteLastFromSyntaxTree: () =>
        set((state) => ({
            syntaxTree: state.syntaxTree ? state.syntaxTree.slice(0, -1) : null,   
        }
        )),
}));