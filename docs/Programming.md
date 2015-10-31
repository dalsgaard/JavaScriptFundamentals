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

```js
c = 8;
```

### Call Expression

```js
console.log(c);
```

### Running a Program

- Interpreter
- Compiler

The JavaScript engine compiles the program on the fly and then immediately runs the compiled code.


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
i = 1.2; // Will produce an error in a static typed language
```

##### Dynamic Typing

Variables can hold values of different types.

```js
var i = 5;
i = 1.2; // Will not produce an error in a dynamic typed language
```

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

#### Lexical Scoping versus Dynamic Scoping

#### Lexical Scope

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
