import capitalsRu from './ruSets/capitalsRu';
import christmasQuizRu from './ruSets/christmasQuizRu';
import foodWordsEnRu from './ruSets/foodWordsEnRu';
import largestRiversRu from './ruSets/largestRiversRu';
import literatureSetsRu from './ruSets/literatureSetsRu';

import largestDesertsEn from './enSets/largestDesertsEn';
import famousLandmarksEn from './enSets/famousLandmarksEn';
import worldCuisinesEn from './enSets/worldCuisinesEn';

const enSets = [
    largestDesertsEn,
    famousLandmarksEn,
    worldCuisinesEn
];

const ruSets = [
    capitalsRu,
    foodWordsEnRu,
    christmasQuizRu,
    literatureSetsRu,
    largestRiversRu,
];

const readySets = [...enSets, ...ruSets];

export default readySets