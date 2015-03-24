# Coercion

## Abstract Value Operations

[ES5 Spec](https://es5.github.io/#x9.1)

### ToString

```
var a = 42;
var b = [1, 2, 4];
var c = {};
var d = null;

console.log(a, b, c, d);
```

[ES5 Spec](https://es5.github.io/#x9.8)


### ToNumber

```
var a = Number('42');
a; // => 42

var b = Number(true);
b; // => 1

var c = Number(false);
c; // => 0

var d = Number(undefined);
d; // => NaN

var e = Number(null);
e; // => 0

var f = Number({});
f; // => NaN
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

```
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

```
var a = Object.create(null);
Number(a);
```

[ES5 Spec](https://es5.github.io/#x9.1)


### Explicit Coercion

```
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

```
var a = '42';
var b = 3.14;
var c = true;
var d = null;

a - 0; // => 42
b + ''; // => '3.14'
!!d; // => false
```

### Loose Equals versus Strict Equals

```
var a = 42;
var b = '42';
var c = true;
var d = '1'

a == b; // => true
a == c; // => false
c == d; // => true
```

```
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

```
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

```
var a = 42;
var b = '42';
var c = '100';

a < c; // => true
b < c; // => false
```

```
var a = Object(42);
var b = Object('42');
var c = Object('100');

a < c; // => true
b < c; // => false
```

[ES5 Spec](https://es5.github.io/#x11.8.5)
