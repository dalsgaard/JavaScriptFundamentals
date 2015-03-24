///*
var User = function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

User.prototype.name = function() {
  return this.firstName + ' ' + this.lastName;
};
//*/
/*
var User = function User(firstName, lastName) {
  this.name = function() {
    return firstName + ' ' + lastName;
  }
};
*/

var kim = new User('Kim', 'Dalsgaard');
kim.firstName = 'Alfred';

console.log(kim.name());
var name = kim.name;
console.log(name());
