// Change code below this line
const getFriends = (users) => {
   const allFriends = users.flatMap(user => user.friends);
   const selectedFriends = allFriends.filter((element, index, array) => array.indexOf(element) === index);
   return selectedFriends;

};
// Change code above this line