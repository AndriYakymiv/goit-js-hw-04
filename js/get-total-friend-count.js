// Change code below this line
const getTotalFriendCount = users => {

return users.reduce ((acc, user) => acc + user.friends.length, 0)

};
// Change code above this line