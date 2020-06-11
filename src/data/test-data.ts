import { TestWordGroup, PersonalityColor } from '../../types';

/*
 * Group of questions with words used in the personality test
 */
const questionGroups: TestWordGroup[] = [
  [
    { id: 1, word: 'self-confident', color: PersonalityColor.Red },
    { id: 2, word: 'structured', color: PersonalityColor.Green },
    { id: 3, word: 'sensitive', color: PersonalityColor.Blue },
    { id: 4, word: 'trusting', color: PersonalityColor.Yellow },
  ],
  [
    { id: 5, word: 'spontaneous', color: PersonalityColor.Red },
    { id: 6, word: 'checks with others', color: PersonalityColor.Yellow },
    { id: 7, word: 'dreamer', color: PersonalityColor.Blue },
    { id: 8, word: 'analytical', color: PersonalityColor.Green },
  ],
  [
    { id: 9, word: 'likes involvement', color: PersonalityColor.Yellow },
    { id: 10, word: 'likes organization', color: PersonalityColor.Green },
    { id: 11, word: 'likes being straightforward', color: PersonalityColor.Red },
    { id: 12, word: 'likes to explore', color: PersonalityColor.Blue },
  ],
  [
    { id: 13, word: 'stubborn', color: PersonalityColor.Green },
    { id: 14, word: 'dictatorial', color: PersonalityColor.Red },
    { id: 15, word: 'rebellious', color: PersonalityColor.Yellow },
    { id: 16, word: 'easily offended', color: PersonalityColor.Blue },
  ],
  [
    { id: 17, word: 'demanding', color: PersonalityColor.Red },
    { id: 18, word: 'nurturing', color: PersonalityColor.Yellow },
    { id: 19, word: 'persistent', color: PersonalityColor.Green },
    { id: 20, word: 'quiet', color: PersonalityColor.Blue },
  ],
  [
    { id: 21, word: 'joiner', color: PersonalityColor.Green },
    { id: 22, word: 'likes to brainstorm', color: PersonalityColor.Blue },
    { id: 23, word: 'resists change', color: PersonalityColor.Yellow },
    { id: 24, word: 'takes charge', color: PersonalityColor.Red },
  ],
  [
    { id: 25, word: 'caring/helpful', color: PersonalityColor.Yellow },
    { id: 26, word: 'outspoken', color: PersonalityColor.Red },
    { id: 27, word: 'steadfast behaviour', color: PersonalityColor.Green },
    { id: 28, word: 'mild mannered', color: PersonalityColor.Blue },
  ],
  [
    { id: 29, word: 'believable', color: PersonalityColor.Yellow },
    { id: 30, word: 'forceful', color: PersonalityColor.Red },
    { id: 31, word: 'disciplined', color: PersonalityColor.Green },
    { id: 32, word: 'possessive', color: PersonalityColor.Blue },
  ],
  [
    { id: 33, word: 'daring', color: PersonalityColor.Red },
    { id: 34, word: 'idealist', color: PersonalityColor.Blue },
    { id: 35, word: 'dutiful', color: PersonalityColor.Green },
    { id: 36, word: 'playful', color: PersonalityColor.Yellow },
  ],
  [
    { id: 37, word: 'logical', color: PersonalityColor.Green },
    { id: 38, word: 'contented', color: PersonalityColor.Blue },
    { id: 39, word: 'friendly', color: PersonalityColor.Yellow },
    { id: 40, word: 'bold/audacious', color: PersonalityColor.Red },
  ],
  [
    { id: 41, word: 'eager beaver', color: PersonalityColor.Red },
    { id: 42, word: 'imaginative', color: PersonalityColor.Blue },
    { id: 43, word: 'accurate/precise', color: PersonalityColor.Green },
    { id: 44, word: 'well liked', color: PersonalityColor.Yellow },
  ],
  [
    { id: 45, word: 'reserved', color: PersonalityColor.Green },
    { id: 46, word: 'inventive', color: PersonalityColor.Blue },
    { id: 47, word: 'charismatic', color: PersonalityColor.Red },
    { id: 48, word: 'optimistic', color: PersonalityColor.Yellow },
  ],
  [
    { id: 49, word: 'authoritative', color: PersonalityColor.Red },
    { id: 50, word: 'team worker', color: PersonalityColor.Yellow },
    { id: 51, word: 'independent', color: PersonalityColor.Blue },
    { id: 52, word: 'traditional', color: PersonalityColor.Green },
  ],
  [
    { id: 53, word: 'talkative', color: PersonalityColor.Yellow },
    { id: 54, word: 'restless', color: PersonalityColor.Red },
    { id: 55, word: 'conscientious', color: PersonalityColor.Green },
    { id: 56, word: 'modest/unassuming', color: PersonalityColor.Blue },
  ],
  [
    { id: 57, word: 'leader', color: PersonalityColor.Red },
    { id: 58, word: 'counsellor', color: PersonalityColor.Yellow },
    { id: 59, word: 'designer', color: PersonalityColor.Blue },
    { id: 60, word: 'controller', color: PersonalityColor.Green },
  ],
  [
    { id: 61, word: 'meticulous', color: PersonalityColor.Green },
    { id: 62, word: 'workaholic', color: PersonalityColor.Red },
    { id: 63, word: 'supportive', color: PersonalityColor.Yellow },
    { id: 64, word: 'self-directed', color: PersonalityColor.Blue },
  ],
  [
    { id: 65, word: 'industrious', color: PersonalityColor.Red },
    { id: 66, word: 'attentive to details', color: PersonalityColor.Green },
    { id: 67, word: 'mental imager', color: PersonalityColor.Blue },
    { id: 68, word: 'positive thinker', color: PersonalityColor.Yellow },
  ],
  [
    { id: 69, word: 'task-oriented', color: PersonalityColor.Green },
    { id: 70, word: 'people-oriented', color: PersonalityColor.Yellow },
    { id: 71, word: 'idea-oriented', color: PersonalityColor.Blue },
    { id: 72, word: 'result-oriented', color: PersonalityColor.Red },
  ],
  [
    { id: 73, word: 'emotional', color: PersonalityColor.Blue },
    { id: 74, word: 'flexible/adaptable', color: PersonalityColor.Yellow },
    { id: 75, word: 'likes recognition', color: PersonalityColor.Red },
    { id: 76, word: 'particular', color: PersonalityColor.Green },
  ],
  [
    { id: 77, word: 'emotional', color: PersonalityColor.Blue },
    { id: 78, word: 'flexible/adaptable', color: PersonalityColor.Yellow },
    { id: 79, word: 'likes recognition', color: PersonalityColor.Red },
    { id: 80, word: 'particular', color: PersonalityColor.Green },
  ],
  [
    { id: 81, word: 'indirect', color: PersonalityColor.Yellow },
    { id: 82, word: 'frank/candid', color: PersonalityColor.Red },
    { id: 83, word: 'careful', color: PersonalityColor.Blue },
    { id: 84, word: 'strict', color: PersonalityColor.Green },
  ],
  [
    { id: 85, word: 'goal-oriented', color: PersonalityColor.Red },
    { id: 86, word: 'capable', color: PersonalityColor.Blue },
    { id: 87, word: 'volunteers', color: PersonalityColor.Yellow },
    { id: 88, word: 'schedule-oriented', color: PersonalityColor.Green },
  ],
  [
    { id: 89, word: 'excels in crisis', color: PersonalityColor.Red },
    { id: 90, word: 'likes compliments', color: PersonalityColor.Yellow },
    { id: 91, word: 'dry humour', color: PersonalityColor.Blue },
    { id: 92, word: 'avoids causing attention', color: PersonalityColor.Green },
  ],
  [
    { id: 93, word: 'likes watching people', color: PersonalityColor.Blue },
    { id: 94, word: 'strong-willed', color: PersonalityColor.Red },
    { id: 95, word: 'enthusiastic', color: PersonalityColor.Yellow },
    { id: 96, word: 'sets very high standards', color: PersonalityColor.Green },
  ],
  [
    { id: 97, word: 'likes watching people', color: PersonalityColor.Red },
    { id: 98, word: 'strong-willed', color: PersonalityColor.Blue },
    { id: 99, word: 'enthusiastic', color: PersonalityColor.Green },
    { id: 100, word: 'sets very high standards', color: PersonalityColor.Yellow },
  ],
  [
    { id: 101, word: 'neat andtidy', color: PersonalityColor.Green },
    { id: 102, word: 'looks good on outside', color: PersonalityColor.Yellow },
    { id: 103, word: 'avoids conflicts', color: PersonalityColor.Blue },
    { id: 104, word: 'usually right', color: PersonalityColor.Red },
  ],
];

export default questionGroups;
