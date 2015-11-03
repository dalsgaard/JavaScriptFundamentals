
var User = function(name) {
    this.getName = function () {
      return name;
    };
    this.setName = function (newName) {
      if (typeof newName === 'string') {
        name = newName;
      }
    };
}

var kim = new User('kim');
