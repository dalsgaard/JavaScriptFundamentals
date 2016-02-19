# Prototypes

## Constructor Functions

```js
var Foo = function() {};

var foo = new Foo();

console.log(foo instanceof Foo);
console.log(foo instanceof Object);
```

_Constructor functions_ starts per convention with a capital letter.

## prototype

### Setting properties on the prototype

```js
var Foo = function() {};
Foo.prototype.a = 5;

var foo = new Foo();
console.log(foo.a);
```

### Assigning the prototype

```js
var Foo = function() {};
Foo.prototype.baz = 5;

var Bar = function() {};
Bar.prototype = new Foo();

var bar = new Bar();
console.log(bar.baz);
```

### hasOwnProperty

```js
var foo = {
	a: 5
};

console.log(foo.hasOwnProperty('a'));
```

```js
var Foo = function() {};
Foo.prototype.a = 5;

var foo = new Foo();

console.log(foo.hasOwnProperty('a'));
console.log(Foo.prototype.hasOwnProperty('a'));
```

### Object.prototype

```js
console.log(Object.prototype.hasOwnProperty('toString'));
```

```js
var foo = {}
console.log(Object.prototype.toString === foo.toString);
```

### constructor

```js
var Foo = function() {};

var foo = new Foo();
console.log(foo.constructor === Foo);
```

```js
var Foo = function() {};
console.log(Foo.constructor === Foo);
```

`constructor` is extremely unreliable,
and it’s an unsafe reference to rely upon in your code.
Generally, such references should be avoided where possible.

### Methods

```js
var Person = function (firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
};

Person.prototype.fullName = function () {
	return this.firstName + ' ' + this.lastName;
};

var kim = new Person('Kim', 'Dalsgaard');
console.log(kim.fullName());
```
