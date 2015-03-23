#Types and Values

## Types

In JavaScript, variables don’t have types - values have types.

### Undefined versus Undeclared

```
var a;

console.log(a);
console.log(b);
```

```
console.log(typeof b);
```

```
if (typeof foo === 'undefined') {
	foo = function() {
		// stuff
	} 
}
```

```
if (!window.foo) {
	foo = function() {
		// stuff
	} 
}
```

## Values

### Arrays

```
var a = [];
var b = [true, 34, 'foo'];
```

### String


### Number

```
var a = 42;
var b = 42.3;
```

```
var a = 0.42;
var b = .42;
```

```
var a = 42.0;
var b = 42.;
```

```
console.log(42.0 === 42);
```

#### Safe Integers

```
9007199254740991
-9007199254740991
```

#### The Not a Number Number (NaN)

```
var a = NaN;
```

```
var a = 2 / undefined;
console.log(a);
console.log(typeof a);
```

```
var a = 2 / undefined;
console.log(a === NaN);
console.log(NaN === NaN);
console.log(NaN == NaN);
```

```
console.log(isNaN(8));
console.log(isNaN(8 / 'foo'));
console.log(isNaN('foo'));
```

```
if (!Number.isNaN) {
    Number.isNaN = function(n) {
        return n !== n;
    };
}
```

#### Infinity

```
var a = 1 / 0;
var b = -1 / 0;
var c = -1 / -0;
var d = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(a, b, c, d);
```

#### Zeros

```
var a = 0 / 1;
var b = 0 / -1;

```

```
console.log(0 === -0);
console.log(0 > -0);
```


### undefined

```
undefined = 42; // WAT!
```

#### void

```
var i = 42;
console.log(void i, i);
```

## Natives

- String()
- Number()
- Boolean()
- Object()
- Function()
- Array()
- Date()
- RegExp()
- Error()


### String()

```
var a = new String('foo');
```

[MDN String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)


### Number()

```
var a = new Number(42);
```

[MDN Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)


### Boolean()

```
var a = new Boolean(false);
```

[MDN Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)


### Boxing

```
var a = 'foo';
console.log(a.length);
console.log(a.toUpperCase());
```

### Unboxing

```
var a = new String('foo');
var b = new Boolean(false);
var c = new Number(42);

console.log(a.valueOf() === 'foo');
console.log(b.valueOf() === false);
console.log(c.valueOf() === 42);
```

```
var a = new Number(42);
var b = a + 0;

console.log(typeof a, typeof b);
```


### Object()

```
var a = new Object();
```

[MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)


### Function()

```
var f = new Function('a', 'b', 'return a + b;');
var g = new Function('a,b', 'return a + b;');
```

[MDN Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)


### Array()

```
var a = new Array();
var b = new Array(12, 'foo', false);
var c = new Array(3);
```

[MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


### Date()

```
var now = new Date();
```

[MDN Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)


### RegExp()

```
var re = new RegExp('\s*foo\s*', 'i');
```

[MDN RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)


### Error()

```
throw new Error('WAT!');
```

[MDN Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

