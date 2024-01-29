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

export async function getSetById(setId) {
  try {
    const set = await mySetsUseCards.sets.get({ set_id: setId });
    if (set) {
      return set;
    } else {
      return null;
    }
  } catch (error) {
    // console.log( error);
  }
}

export async function updateSet(updatedSet) {
  try {
    await mySetsUseCards.sets.put(updatedSet);
  } catch (error) {
    // console.log(error);
  }
}

export { readySetsUseCards, mySetsUseCards };
