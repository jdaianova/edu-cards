const keysForCreateNewSet = [
    'set_lang',
    'currentCardIndex',
    'currentTitle',
    'searchTerm',
    'currentCategory',
    'instructions',
    'currentStep',
    'cards',
];

export const clearAfterCreateNewSet = () => {
    for (const key of keysForCreateNewSet) {
        localStorage.removeItem(key);
    }
};