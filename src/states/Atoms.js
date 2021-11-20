import { atom } from 'recoil';
import { getData } from 'api.js';

export const countState = atom({
  key: 'countState',
  default: 0,
});

export const questionId = atom({
  key: 'questionId',
  default: 1,
});

export const getQuestionList = getData({ key: 'questionList', uri: `question` });
export const getQuestion = getData({ key: 'questionId', uri: `question/${questionId}` });
