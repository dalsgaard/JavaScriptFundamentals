# Coercion

## Abstract Value Operations

[ES5 Spec](https://es5.github.io/#x9.1)

### ToString

```
Type(X) is String -> X

Type(X) is Undefined -> "undefined"
Type(X) is Null -> "null"

Type(X) is Boolean
  X is true -> "true"
  X is false -> "false"

Type(X) is Number
  X is +0 -> "0"
  X is -0 -> "0"
  X is NaN -> "NaN"
  X is Infinity -> "Infinity"
  X is -Infinity -> "-Infinity"
  X is <OtherNumber> -> <StringFromNumber>

Type(X) is Object -> ToPrimitive(X, <HintString>)
```

```js
String(42); // => "42"

String(null); // => "null"
```

[ES5 Spec](https://es5.github.io/#x9.8)


### ToNumber

```
Type(X) is Number -> X

Type(X) is Undefined -> NaN
Type(X) is Null -> +0

Type(X) is Boolean
  X is true -> 1
  X is false -> +0

Type(X) is String
  X is <Empty> -> 0
  X is <WhiteSpace> -> 0
  X is <Parsable> -> <NumberFromString>
  X is <NonParsable> -> NaN

Type(X) is Object -> ToPrimitive(X, <HintNumber>)
```

```js
Number(true); // => 1

Number(false); // => 0

Number(undefined); // => NaN

Number(null); // => 0

Number('42'); // => 42

Number(''); // => 0

Number('foo'); // => NaN

Number('42foo'); // => NaN
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
X is <Primitive> -> X
Hint is <HintNumber>
  IsCallable("valueOf") is true
    Call("valueOf", X) is <Primitive> -> Call("valueOf", X)
  Else
    IsCallable("toString") is true
      Call("toString", X) is <Primitive> -> Call("toString", X)
      Else -> Throw <TypeError>  
    Else -> Throw <TypeError>
Hint is <HintString>
  IsCallable("toString") is true
    Call("toString", X) is <Primitive> -> Call("toString", X)
  Else
    IsCallable("valueOf") is true
      Call("valueOf", X) is <Primitive> -> Call("valueOf", X)
      Else -> Throw <TypeError>  
    Else -> Throw <TypeError>
```

```js
String([1, 2, 4]); // => "1,2,4"

String({}); // => "[object Object]"

Number({}); // => NaN

Number([]); // => 0

Number([42]); // => 42

Number([4, 2]); // => NaN  
```

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

#### The Abstract Equality Comparison Algorithm

```
Type(X) same as Type(Y)
  Type(X) is Undefined -> true
  Type(X) is Null -> true
  Type(X) is Number
    X is NaN or Y is NaN -> false
    X is +O and Y is -0 -> true
    X is -O and Y is +0 -> true
    X is same as Y -> true
    Else -> false
  Type(X) is String
    X and Y has same sequence of characters -> true
    Else -> false
  Type(X) is Boolean
    X is true and Y is true -> true
    X is false and Y is false -> true
    Else -> false
  Type(X) is Object
    X and Y refer the same object -> true
    Else -> false
Type(X) is Undefined and Type(Y) is Null -> true
Type(X) is Null and Type(Y) is Undefined -> true
Type(X) is Number and Type(Y) is String -> X == ToNumber(Y)
Type(X) is String and Type(Y) is Number -> ToNumber(X) == Y
Type(X) is Boolean -> ToNumber(X) == Y
Type(Y) is Boolean -> X == ToNumber(Y)
Type(X) is String or Number and Type(Y) is Object -> X == ToPrimitive(Y, <HintNumber>)
Type(X) is Object and Type(Y) is String or Number -> ToPrimitive(X, <HintNumber>) == Y
```

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

#### X < Y

```
Let pX equal ToPrimitive(X, <HintNumber>)
Let pY equal ToPrimitive(Y, <HintNumber>)
Type(pX) and Type(pY) is String
  Compare pX and pY as strings
Else
  Let nX equal ToNumber(pX)
  Let nY equal ToNumber(pY)
  nX or nY is NaN -> undefined (!) 
  nX and nY is the same -> false
  nX and nY is -O or +0 -> false
  nX is +Infinity -> false
  nY is +Infinity -> true
  nY is -Infinity -> false
  nX is -Infinity -> true
  Compare nX and nY as numbers
```

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
