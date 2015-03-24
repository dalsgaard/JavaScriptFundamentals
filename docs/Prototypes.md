# Prototypes

## Constructor Functions

```
var Foo = function() {};

var foo = new Foo();

console.log(foo instanceof Foo);
console.log(foo instanceof Object);
```

## prototype

```
var Foo = function() {};
Foo.prototype.a = 5;

var foo = new Foo();
console.log(foo.a);
```

```
var Foo = function() {};
Foo.prototype.bar = 5;

var Bar = function() {};
Bar.prototype = new Foo();

var bar = new Bar();
console.log(bar.a);
```


### hasOwnProperty

```
var foo = {
	a: 5
};

console.log(foo.hasOwnProperty('a'));
```

```
var Foo = function() {};
Foo.prototype.a = 5;

var foo = new Foo();

console.log(foo.hasOwnProperty('a'));
console.log(Foo.prototype.hasOwnProperty('a'));
```

### Object.prototype

```
console.log(Object.prototype.hasOwnProperty('toString'));
```

```
var foo = {}
console.log(Object.prototype.toString === foo.toString);
```

### constructor

```
var Foo = function() {};

var foo = new Foo();
console.log(foo.constructor === Foo);
```

```
var Foo = function() {};
console.log(Foo.constructor === Foo);
```

`constructor` is extremely unreliable, and it’s an unsafe reference to rely upon in your code. Generally, such references should be avoided where possible.
