import { create } from "zustand";

interface WrongulateState {
    isWrongulated: boolean;
    toggleWrongulate: () => void;
}

export const useWrongulate = create<WrongulateState>((set) => ({
    isWrongulated: false,
    toggleWrongulate: () =>
        set((state) => ({
            isWrongulated: !state.isWrongulated,
        })),
}));