export default (searchTerm) => {
  return fetch(`https://api.nationalize.io/?name=${searchTerm}`).then(
    (results) => {
      return results.json();
    }
  );
};
