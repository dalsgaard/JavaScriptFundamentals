# Grammar

## Curly Braces

### Object Literals

```js
var a = {
	foo: 42
};
```

### Blocks

```js
[] + {};
{} + [];
```

### Labels

```js
{
	foo: 42
}
```


## Operator Precedence

```js
var d = a && b || c ? c || b ? a : c && b : a;
```

[MDN Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)


## Short Circuited

```js
var a = 0;
var b = 0;

true && a++;
false && b++;

console.log(a, b);
```

```js
var a = 0;
var b = 0;

true || a++;
false || b++;

console.log(a, b);
```


## Associativity

```js
console.log(true ? false : true ? true : true);
```

## Automatic Semicolon Insertion

If the JavaScript parser parses a line where a parser error would occur
(a missing expected `;`),
and there is nothing but whitespace and/or comments between the end of some statement
and that line’s newline/line break, it insert one


## try .. catch .. finally and throw

```js
try {
    throw 'foo';
} catch (e) {
    console.dir(e);
}
```

```js
try {
	// stuff
} catch (e) {
    console.log(e);
} finally {
	console.log('Done!');
}
```

```js
try {
    // stuff
} catch (e) {
	if (e instanceof Error) {
	    console.dir(e.stack);
	} else {
		throw e;
	}
}
```

```js
function foo() {
	try {
		return 4;
	} finally {
		return 6;
	}
}

console.log(foo());
```

```js
function foo() {
	try {
		return 4;
	} finally {
		throw new Error();
	}
}

console.log(foo());
```


## switch

```js
var a = 42;

switch (a) {
	case 2:
		// stuff
		break;
	case 42:
		// stuff
		break;
	default:
		// default stuff
}
```

```js
var a = 42;

switch (a) {
	case 2:
		// stuff
	case 42:
		// stuff

	case 100:
		// stuff
	default:
		// default stuff
}
```

```js
var a = '42';

switch (true) {
	case a == 2:
		// stuff
		break;
	case a == 42:
		// stuff
		break;
	default:
		// default stuff
}
```
## for .. in ..

```js
var foo = {
  a: 1,
  b: 2,
  c:3
};

for (var p in foo) {
  console.log(p, foo[p]);
}
```
