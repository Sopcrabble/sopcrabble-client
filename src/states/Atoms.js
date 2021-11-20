import { atom } from 'recoil';
import { getData } from 'api.js';

export const countState = atom({
  key: 'countState',
  default: 0,
});

export const getQuestionList = getData();
