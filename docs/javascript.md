# Introduction to JavaScript

## Types and Values

### Build-In Types

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `object`
- `symbol` (ES6)

### String

Strings are primitives in JavaScript!

#### Literals

There is no difference between a string in single- and double quotes.

```js
var a = 'single';
var b = "double";
```

#### typeof

```js
var a = 'foo';
typeof a; // 'string'
```

### number

All numbers are of the same type (no special floats, integers, etc.).

#### Literals

```js
var a = 1;
var b = 2.3;
```

#### typeof

```js
var a = 2;
typeof a; // 'number'
```

### boolean

#### Literals

```js
var a = true;
var b = false;
```

#### typeof

```js
var a = false;
typeof a; // 'boolean'
```

### null

_null_ is both a _type_ and a _value_.

#### Literals

```js
var a = null;
```

#### typeof

```js
var a = null;
typeof a; // 'object' - Bug!
```

This is a serious bug in JavaScript that can't be fixed.

### undefined

_undefined_ (like _null_) is both a _type_ and a _value_.

#### Literals

```js
var a = undefined;
```

#### typeof

```js
var a;
typeof a; // 'undefined'
```

### object

#### Literals

```js
var a = {
  b: 5,
  c: 'foo'
};
```

#### typeof

```js
var a;
typeof a; // 'object'
```

#### Property Accessors

```js
var b = a.b;
var c = a['c'];
```

### Sub-Types of Object

- Array
- Function


### Array

_Arrays_ are objects with special behavior for numerical keys.

#### Literals

```js
var a = [1, 2, 4, 8];
var b = [null, false, 5, 'foo', undefined];
var c = [];
var d = [[1, 3], [2, 4]];
```

#### typeof

```js
var a = [];
typeof a; // 'object'
```

#### Accessors

```js
var i = a[2];
a[4] = 5;
```

#### Build-In Properties

```js
var a = [1, 2, 4];
a.length; // 3
a.length = 2;
```

The largest numeric key plus one or an explicitly set value.

### Function

_Functions_ are callable objects.

#### Literals

```js
function foo(a, b, c) {
  // stuff
}

var bar = function(a, b, c) {
  // stuff
};

var baz = function foo(a, b, c) {
  // stuff
};
```

#### typeof

```js
function foo() {}
typeof foo; // 'object'
```

#### Build-In Properties

```js
function foo(a, b, c) {
  return a + b + c;
}
foo.length; // 3
```

The length of the parameter list.

## Variables

### Naming

An identifier must start with a-z, A-Z, $, or \_.
It can then contain any of those characters plus the numerals 0-9.

There is a list of reserved words that cannot be used as variable names.

[Reserved keywords as of ECMAScript 6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Reserved_keywords_as_of_ECMAScript_6)

## Function Scope

JavaScript uses a kind of _Lexical Scope_ called _Function Scope_
where the function is the scope barriers.

### Hoisting

Every variable declaration is hoisted to the top of the scope.


## Conditionals

### More on if-else-Statements

```js
if (i < 5) i = 0;

if (i < 5) i = 0 else i = 10;

if (i < 5) {
  // stuff
} else if (i < 10) {
  // stuff
}
```

### switch-Statements

```js
switch (i) {
  case 1:
    // stuff
    break;
  case 2:
    // stuff
    break;
  case 3:
    // stuff
    break;
  default:
    // stuff
}
```

_switch_ uses strict equality.

## First-Order Functions

In computer science, a programming language is said to have first-class functions
if it treats functions as first-class citizens.
Specifically, this means the language supports passing functions as arguments to other
functions, returning them as the values from other functions, and assigning them to variables
or storing them in data structures.

### Passing functions as arguments to other functions

```js
function foo(bar) {
  bar();
}
```

#### The build-in setTimeout function

```js
setTimeout(function() {
  // stuff
}, 1000);
```

#### Returning them (functions) as the values from other functions

```js
function foo() {
  return function() {
    // stuff
  };
}
```

#### Assigning them (functions) to variables

```js
var foo = function() {
  // stuff
};
```

#### Storing them (functions) in data structures

```js
var foo = {
  bar: function() {
    // stuff
  }
};
```

### Immediately Invoked Function Expressions (IIFEs)

```js
(function() {
  //stuff
})();
```

### Closure

```js
function foo() {
  var a = 0;
  return function(b) {
    return a += b;
  };
}

var bar = foo();
bar(2); // => 2
bar(3); // => 5

var baz = foo();
baz(2); // => 2
```
