const getQuestionWord = (num) => {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return ' вопрос';
  } else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
    return ' вопроса';
  } else {
    return ' вопросов';
  }
}

export default getQuestionWord
