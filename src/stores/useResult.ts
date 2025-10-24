import { create } from "zustand";

interface ResultState {
    result: string | null;
    setResult: (res: string) => void;
    clearResult: () => void;
}
export const useResult = create<ResultState>((set) => ({
    result: null,
    setResult: (res: string) => set({ result: res }),
    clearResult: () => set({ result: null }),
}));