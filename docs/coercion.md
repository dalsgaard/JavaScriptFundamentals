# Coercion

## Abstract Value Operations

[ES5 Spec](https://es5.github.io/#x9.1)

### ToString

```js
String(42); // => "42"

String(null); // => "null"

String([1, 2, 4]); // => "1,2,4"

String({}); // => "[object Object]"
```

[ES5 Spec](https://es5.github.io/#x9.8)


### ToNumber

```js
Number(true); // => 1

Number(false); // => 0

Number(undefined); // => NaN

Number(null); // => 0

Number('42'); // => 42

Number(''); // => 0

Number('foo'); // => NaN

Number('42foo'); // => NaN

Number({}); // => NaN
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

String(a); // => 'foo'

Number(a); // => 42
```

### ES5 missing prototype

```js
var a = Object.create(null);
Number(a);
```

[ES5 Spec](https://es5.github.io/#x9.1)


### Explicit Coercion

```js
Boolean('42'); // => true
Boolean(null); // => false

Number('42'); // => 42
Number(null); // => 0
Number('foo'); // => NaN

String(3.14); // => '3.14'
String(true); // => 'true'
```

### Implicit Coercion

```js
'42' - 0; // => 42
3.14 + ''; // => '3.14'
!!null; // => false
```

### Loose Equals versus Strict Equals

```js
42 == '42'; // => true
42 == true; // => false
true == '1'; // => true
```

```js
undefined == null; // => true
undefined == false; // => false
undefined == 0; // => false
undefined == ''; // => false

null == false; // => false
null == 0; // => false
null == ''; // => false
```

```js
var a = new Number(42);
var b = new Number(42);
var c = 42;
var d = '42';

a == 42; // => true
b == 42; // => true
a == b; // => false
a == '42'; // => true
```

[ES5 Spec](https://es5.github.io/#x11.9.3)

### Abstract Relational Comparison

```js
42 < '100'; // => true
'42' < '100'; // => false
42 < '100foo'; // => false
0 < '100foo'; // => false
```

```js
var a = Object(42);
var b = Object('42');
var c = Object('100');

a < c; // => true
b < c; // => false
```

[ES5 Spec](https://es5.github.io/#x11.8.5)
