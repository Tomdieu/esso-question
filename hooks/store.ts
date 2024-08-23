import { create } from 'zustand';

interface AppState {
  answers: Record<number, string | string[] | null>; // Supports different answer types
  setAnswer: (questionId: number, answer: string) => void;
  resetAnswers: () => void;
}

const useStore = create<AppState>((set) => ({
  answers: {},
  setAnswer: (questionId: number, answer: string) =>
    set((state) => ({ answers: { ...state.answers, [questionId]: answer } })),
  resetAnswers: () => set(() => ({ answers: {} })),
}));

export default useStore;
