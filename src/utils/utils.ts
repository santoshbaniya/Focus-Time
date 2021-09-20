const JsonData = require('./Questions.json');
export const _ = (array: any[]) => [...array].sort(() => Math.random() - 0.7);

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}
export type Question = {
  category: string;
  correct_answer: string;
  difficult: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
export type QuestionState = Question & {answer: string[]};

export const getQuizQuestions = (amount: number, difficulty: Difficulty) => {
  try {
    // eslint-disable-next-line prettier/prettier
    // const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    // const res = await fetch(endpoint);.
    return JsonData.results.map((question: Question) => ({
      ...question,
      answers: _([...question.incorrect_answers, question.correct_answer]),
    }));
  } catch (e) {
    console.log(e);
  }
};
