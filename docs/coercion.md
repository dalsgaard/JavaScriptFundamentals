# Coercion

## Abstract Value Operations

[ES5 Spec](https://es5.github.io/#x9.1)

### ToString

```js
var a = String(42);
a; // => "42"

var b = String(null);
b; // => "null"

var c = String([1, 2, 4]);
c; // => "1,2,4"

var d = String({});
d; // => "[object Object]"
```

[ES5 Spec](https://es5.github.io/#x9.8)


### ToNumber

```js
var a = Number(true);
a; // => 1

var b = Number(false);
b; // => 0

var c = Number(undefined);
c; // => NaN

var d = Number(null);
d; // => 0

var e = Number('42');
e; // => 42

var f = Number('');
f; // => 0

var g = Number('foo');
g; // => NaN

var h = Number({});
h; // => NaN
```

[ES5 Spec](https://es5.github.io/#x9.3)


### ToBoolean

#### Falsy

- `undefined`
- `null`
- `false`
- `+0`
- `-0`
- `NaN`
- `""`

[ES5 Spec](https://es5.github.io/#x9.2)


#### Truthy

Anything not explicitly on the falsy list is therefore truthy.


## ToPrimitive

```js
var a = {
	toString: function() {
		return 'foo';
	},
	valueOf: function() {
		return 42;
	}
};

var b = String(a);
b; // => 'foo'

var c = Number(a);
c; // => 42
```

### ES5 missing prototype

```js
var a = Object.create(null);
Number(a);
```

[ES5 Spec](https://es5.github.io/#x9.1)


### Explicit Coercion

```js
var a = '42';
var b = 3.14;
var c = true;
var d = null;
var e = 'foo';

Boolean(a); // => true
Boolean(d); // => false

Number(a); // => 42
Number(d); // => 0
Number(e); // => NaN

String(b); // => '3.14'
String(c); // => 'true'
```

### Implicit Coercion

```js
var a = '42';
var b = 3.14;
var c = true;
var d = null;

a - 0; // => 42
b + ''; // => '3.14'
!!d; // => false
```

### Loose Equals versus Strict Equals

```js
var a = 42;
var b = '42';
var c = true;
var d = '1'

a == b; // => true
a == c; // => false
c == d; // => true
```

```js
var a;
var b = null;
var c = false;
var d = 0;
var e = '';

a == b; // => true
a == c; // => false
a == d; // => false
a == e; // => false

b == c; // => false
b == d; // => false
b == e; // => false
```

```js
var a = new Number(42);
var b = new Number(42);
var c = 42;
var d = '42';

a == c; // => true
b == c; // => true
a == b; // => false
a == d; // => true
```

[ES5 Spec](https://es5.github.io/#x11.9.3)

### Abstract Relational Comparison

```js
var a = 42;
var b = '42';
var c = '100';

a < c; // => true
b < c; // => false
```

```js
var a = Object(42);
var b = Object('42');
var c = Object('100');

a < c; // => true
b < c; // => false
```

[ES5 Spec](https://es5.github.io/#x11.8.5)
