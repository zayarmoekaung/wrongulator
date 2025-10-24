import { create } from "zustand";
import type { SyntaxNode } from "../types/syntaxNode";

interface HistoryState {
    history: SyntaxNode[][]; 
    addToHistory: (syntaxTree: SyntaxNode[]) => void;
    clearHistory: () => void;
}

export const useHistory = create<HistoryState>((set) => ({
    history: [],
    addToHistory: (syntaxTree: SyntaxNode[]) =>
        set((state) => ({
            history: [...state.history, syntaxTree],
        })),
    clearHistory: () => set({ history: [] }),
}));