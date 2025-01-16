function compareArrays(arr1, arr2) {
  return arr1.every((elem, index) => elem === arr2[index] && arr1.length === arr2.length);
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users
    .filter((users) => users.gender === gender || 0)
    .reduce((acc, person, index, array) => {
      acc += person.age;
      if (index === array.length - 1) {
        return acc / array.length;
      }
      return acc;
    }, 0);
  return result;
}
