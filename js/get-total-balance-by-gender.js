// Change code below this line
const getTotalBalanceByGender = (users, gender) => {
    return users.filter (user => user.gender === gender)
   .reduce ((acc, user) => acc += user.balance, 0)
};
// Change code above this line