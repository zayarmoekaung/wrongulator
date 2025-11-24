import { create } from "zustand";
import type { SyntaxNode } from "../types/syntaxNode";
interface CalculateState {
    syntaxTree: SyntaxNode[] | null;
    setSyntaxTree: (tree: SyntaxNode[]) => void;
    clearSyntaxTree: () => void;
    deleteLastFromSyntaxTree: () => void;
}
export const useCalculate = create<CalculateState>((set) => ({
    syntaxTree: null,
    setSyntaxTree: (tree: SyntaxNode[]) => set({ syntaxTree: tree }),
    clearSyntaxTree: () => set({ syntaxTree: null }),
    deleteLastFromSyntaxTree: () =>
        set((state) => ({
            syntaxTree: state.syntaxTree ? state.syntaxTree.slice(0, -1) : null,   
        }
        )),
}));