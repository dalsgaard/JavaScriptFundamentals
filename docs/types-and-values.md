# Types

In JavaScript, variables don’t have types - values have types.

## Undefined versus Undeclared

```js

var a;

console.log(a);
console.log(b);
```

```js
console.log(typeof b);
```

```js
if (typeof foo === 'undefined') {
	foo = function() {
		// stuff
	}
}
```

```js
if (!window.foo) {
	foo = function() {
		// stuff
	}
}
```

# Values

## Arrays

```js
var a = [];
var b = [true, 34, 'foo'];
```

## String

```js
var s = 'Foo';
```

## Number

```js
var a = 42;
var b = 42.3;
```

```js
var a = 0.42;
var b = .42;
```

```js
var a = 42.0;
var b = 42.;
```

```js
console.log(42.0 === 42);
```

### Safe Integers

```js
9007199254740991
-9007199254740991
```

### The Not a Number Number (NaN)

#### Literal

```js
var a = NaN;
```

#### As a result

```js
var a = 2 / undefined;
console.log(a);
console.log(typeof a);
```

#### Equality

```js
var a = 2 / undefined;
console.log(a === NaN);
console.log(NaN === NaN);
console.log(NaN == NaN);
```

#### isNaN

```js
console.log(isNaN(8));
console.log(isNaN(8 / 'foo'));
console.log(isNaN('foo'));
```

```js
if (!Number.isNaN) {
    Number.isNaN = function(n) {
        return n !== n;
    };
}
```

### Infinity

```js
var a = 1 / 0;
var b = -1 / 0;
var c = -1 / -0;
var d = Number.MAX_VALUE + Number.MAX_VALUE;
```

### Zeros

```js
var a = 0 / 1;
var b = 0 / -1;
```

```js
console.log(0 === -0);
console.log(0 > -0);
```


## undefined

```
undefined = 42; // WAT!
```

### void

```js
var i = 42;
console.log(void i, i);
```
