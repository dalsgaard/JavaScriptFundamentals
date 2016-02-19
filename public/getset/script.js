
function makePerson(firstName, lastName) {
  var fullName = function () {
    return firstName + ' ' + lastName;
  }
  var person = {
    fullName: fullName
  };
  return person;
}

var kim = makePerson('Kim', 'Dalsgaard');
console.log(kim.fullName());
