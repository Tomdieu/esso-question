import { create } from "zustand";

type Answer = {
  questionId: number;
  value: string | string[] | undefined;
};

// Define the store state
interface QuestionStoreState {
  answers: Answer[];
  getAnswer: (questionId: number) => string | string[] | undefined;
  setAnswer: (questionId: number, value: string | string[]) => void;
  resetAnswers: () => void;
}

// Create the Zustand store with the new name
export const useQuestionStore = create<QuestionStoreState>((set, get) => ({
  answers: [],
  getAnswer: (questionId: number) => {
    const answer = get().answers.find((a) => a.questionId === questionId);
    return answer ? answer.value : undefined;
  },
  setAnswer: (questionId: number, value: string | string[]) => {
    set((state) => {
      const existingAnswerIndex = state.answers.findIndex(
        (a) => a.questionId === questionId
      );

      const updatedAnswers =
        existingAnswerIndex !== -1
          ? state.answers.map((a, i) =>
              i === existingAnswerIndex ? { ...a, value } : a
            )
          : [...state.answers, { questionId, value }];

      return { answers: updatedAnswers };
    });
  },
  resetAnswers: () => set({ answers: [] }),
}));
