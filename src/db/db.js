import Dexie from 'dexie';
import allSets from '../data/cardSets/allSets';

const readySetsUseCards = new Dexie('readySetsUseCards');
const mySetsUseCards = new Dexie('mySetsUseCards');

readySetsUseCards.version(1).stores({
  sets: 'set_id, set_title, date_of_create, lang, category',
});

mySetsUseCards.version(1).stores({
  sets: 'set_id, set_title, date_of_create, lang, category',
});

async function loadData() {
  await readySetsUseCards.sets.bulkPut(allSets);
}

loadData();

export { readySetsUseCards, mySetsUseCards };
