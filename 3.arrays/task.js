function compareArrays(arr1, arr2) {
  return arr1.every((elem, index) => elem === arr2[index] && arr1.length === arr2.length);
}

function getUsersNamesInAgeRange(users, gender) {
  return users.filter(user => user.gender === gender).
    reduce((average, userAge, index, array) => average + userAge.age / array.length, 0);
}
