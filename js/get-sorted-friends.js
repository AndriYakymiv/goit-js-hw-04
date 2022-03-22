// Change code below this line
const getSortedFriends = users => {
   return [...users]
    .flatMap(user => user.friends)
    .filter((friends, index, array) => array.indexOf(friends) === index)
    .sort((a,b) => a.localeCompare(b))
};
// Change code above this line