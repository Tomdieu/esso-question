import { create } from 'zustand';

interface AppState {
  answers: Record<number, string | string[] | null>; // Supports different answer types
  setAnswer: (questionId: number, answer: string) => void;
  addAnswer: (questionId: number, answer: string) => void;
  removeAnswer: (questionId: number, answer: string) => void;
  resetAnswers: () => void;
}

const useStore = create<AppState>((set) => ({
  answers: {},

  setAnswer: (questionId: number, answer: string) =>
    set((state) => ({ answers: { ...state.answers, [questionId]: answer } })),

  addAnswer: (questionId: number, answer: string) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: [
          ...(Array.isArray(state.answers[questionId]) ? state.answers[questionId] : []),
          answer,
        ].filter(Boolean), // Ensures no null values are added
      },
    })),

  removeAnswer: (questionId: number, answer: string) =>
    set((state) => {
      const currentAnswers = state.answers[questionId];

      if (Array.isArray(currentAnswers)) {
        // If the current answer is an array, filter out the answer to be removed
        const updatedAnswers = currentAnswers.filter((a) => a !== answer);
        return {
          answers: {
            ...state.answers,
            [questionId]: updatedAnswers.length > 0 ? updatedAnswers : null, // Set to null if no answers remain
          },
        };
      } else {
        // If the current answer is not an array, simply remove it
        const { [questionId]: _, ...remainingAnswers } = state.answers;
        return { answers: remainingAnswers };
      }
    }),

  resetAnswers: () => set(() => ({ answers: {} })),
}));

export default useStore;
