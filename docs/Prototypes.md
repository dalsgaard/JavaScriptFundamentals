# Prototypes

## Constructor Functions

```js
var Foo = function() {};

var foo = new Foo();

console.log(foo instanceof Foo);
console.log(foo instanceof Object);
```

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
Foo.prototype.bar = 5;

var Bar = function() {};
Bar.prototype = new Foo();

var bar = new Bar();
console.log(bar.a);
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
