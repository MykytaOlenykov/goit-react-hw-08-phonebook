export const userNameNormalization = userName => {
  return userName
    .split(' ')
    .reduce((acc, word) => {
      const normalizedWord = word.trim();

      if (normalizedWord) {
        return (acc += normalizedWord + ' ');
      }

      return acc;
    }, '')
    .trim();
};
