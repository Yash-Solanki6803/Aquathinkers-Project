import { create } from "zustand";

export const useStore = create((set) => ({
  synthesisType: false,
  toggleSynthesis: () =>
    set((state) => ({ synthesisType: !state.synthesisType })),
}));
