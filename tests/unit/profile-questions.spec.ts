import questionGroups from '@/data/test-data';
import { TestWord } from 'types';

const countRelatedItems = (checkKey: keyof TestWord, checkValue: number|string): number => {
  return questionGroups.reduce((acc, group) => {
    group.forEach((question: TestWord) => {
      if (question[checkKey] === checkValue) {
        acc += 1;
      }
    });
    return acc;
  }, 0);
}

describe('Profile questions', () => {
  questionGroups.forEach((group) => {
    group.forEach(({ id, word }) => {
      test(`Test unique ID: ${id}`, () => {
        expect(countRelatedItems('id', id)).toBe(1);
      });

      test(`Test unique answer in same group: ${word}`, () => {
        expect(group.filter((question) => question.word === word).length).toBe(1);
      });
    });
  });
});
