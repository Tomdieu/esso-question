import { create } from 'zustand';

interface AppState {
  answers: Record<number, string>;
  setAnswer: (questionId: number, answer: string) => void;
}

const useStore = create<AppState>((set) => ({
  answers: {},
  setAnswer: (questionId: number, answer: string) =>
    set((state) => ({ answers: { ...state.answers, [questionId]: answer } })),
}));

export default useStore;