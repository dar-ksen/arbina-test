export const getRandomString = () =>
  (Math.random() + 1).toString(36).substring(7);

export const searchStrings = (strings, search) => {
  if (search.length === 0) {
    return strings;
  }

  return strings.filter((string) => {
    return string.toLowerCase().indexOf(search.toLowerCase()) > -1;
  });
};
