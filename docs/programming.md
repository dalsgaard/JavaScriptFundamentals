# Introduction to Programming

## Statement

```js
a = b + 3;
```

- Variables - `a`, `b`
- Literal values - `3`
- Operators - `+`
- (Semicolon - `;`)

## Expressions

The statement `a = b + 3;` consists of four expressions

- Literal value expression - `3`
- Variable expression - `b`
- Arithmetic expression - `b + 3`
- Assignment expression - `a = b + 3`

### Expression Statement

An _expression statement_ is a statement with only one expression.

```js
c = 8;
```

### Call Expression

A _call expression_ is an expression calling a _subroutine_.

```js
console.log(c);
```

### Running a Program

There is fundamentally two principles for running a program.

- Interpreting
- Compiling

The JavaScript engine compiles the program on the fly and then immediately runs the compiled code.

This means that JavaScript is a _compiled language_!

### Declaring Variables

```js
var a
```

Or with an assignment

```js
var b = 6
```

### Operators

#### Assignment

- `=`

As in

```js
c = 8
```

#### Mathematical Operators

- `+` (addition)
- `-` (subtraction)
- `*` (multiplication)
- `/` (division)

As in

```js
3 + 4
```

#### Compound Assignment Operators

- `+=`
- `-=`
- `*=`
- `/=`

As in

```js
c += 2
```

#### Increment/Decrement Operators

- `++`
- `--`

As in

```js
i++
```

#### Object Property Access Operator

- `.`

As in

```js
foo.bar
```

#### Equality Operators

- `==` (loose-equals)
- `===` (strict-equals)
- `!=` (loose-not-equals)
- `!==` (strict-not-equals)

As in

```js
i === 0
```

#### Comparison Operators

- `<` (less than)
- `>` (greater than)
- `<=` (less than or loose-equals)
- `>=` (greater than or loose-equals)

As in

```js
i >= 0
```

#### Logical Operators

- `&&` (and)
- `||` (or)
- `!` (not)

As in

```js
a && b || !c
```

#### Bitwise Operators

- `&` (and)
- `|` (or)
- `^` (xor)
- `~` (not)

As in

```js
a & 4
```

### Comments

```js
// Line comment

a = 4; // Rest of line comment

/*
  Block comment
*/

a = 4 * 0.5 /* inline comment */ + 3;
```

### Variables

#### Static Typing versus Dynamic Typing

##### Static Typing

A variable is declared to hold values only of a given type.

```js
var i = 5;
i = 'foo'; // Will produce an error in a static typed language
```

##### Dynamic Typing

Variables can hold values of different types.

```js
var i = 5;
i = 'foo'; // Will not produce an error in a dynamic typed language
```

*Dynamic Typing != Typeless*

### Blocks

```js
{
  a = 4;
  b = 6;
  c = a / b;
}
```

### Conditionals

#### if-Statements

```js
if (index > 5) {
  // true stuff
}

if (index === 1) {
  // true stuff
} else {
  // false stuff
}
```

### Loops

#### while-Statements

```js
while (index < 10) {
  // zero or more repeating stuff
}
```

#### do-Statements

```js
do {
  // one ore more repeating stuff
} while (index < 10);
```

#### for-Statements

```js
for (var i = 0; i < 10; i++) {
  // 10 times repeating stuff
}
```

### Functions

```js
function foo() {
  // stuff
}
```

#### Parameters

```js
function foo(a, b) {
  // stuff with a and b
}
```

#### Return Statements

```js
function foo(a, b) {
  return a + b;
}
```

### Scope

Scoping can roughly be split into _Lexical Scoping_ and _Dynamic Scoping_.

#### Dynamic Scoping

In _dynamic scoping_ the scope is created dynamically.

##### A fictive language DSJS

```
function foo () {
  return i * 2;
}

function bar () {
  var i = 3;
  return foo();
}

function baz () {
  var i = 4;
  return foo();
}

bar(); // => 6
baz(); // => 8
```

#### Lexical Scope

In _lexical scoping_ the scope is fixed at _compile time_.

```js
function bar() {
  console.log(i); // Error!
}

function foo() {
  var i = 5;
  bar();
}

foo();
```

#### Nested Scope

```js
function foo() {
  var i = 5;

  function bar() {
    console.log(i);
  }

  bar();
}

foo();
```
