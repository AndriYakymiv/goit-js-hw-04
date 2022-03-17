
const getUsersWithAge = (users, minAge, maxAge) => {
 const userAge = users.filter(user => user.age >= minAge && user.age <=maxAge);
return userAge;

};
