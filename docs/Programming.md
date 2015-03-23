# Introduction to Programming

## Statement

	a = b + 3;

- Variables - `a`, `b`
- Literal values - `3`
- Operators - `+`
- (Semicolon - `;`)

## Expressions

The statement `a = b + 3;` consists of four expressions

- Literal value expression - `2`
- Variable expression - `b`
- Arithmetic expression - `b + 3`
- Assignment expression - `a = b + 3`

### Expression Statement

	c = 8;

### Call Expression

	console.log(c);

### Running a Program

- Interpreter
- Compiler

The JavaScript engine compiles the program on the fly and then immediately runs the compiled code.


### Declaring Variables

	var a

Or with a assignment

	var b = 6

### Operators

#### Assignment

- `=`

As in

	c = 8

#### Mathematical Operators

- `+` (addition)
- `-` (subtraction)
- `*` (multiplication)
- `/` (division)

As in

	3 + 4

#### Compound Assignment Operators

- `+=`
- `-=`
- `*=`
- `/=`

As in

	c += 2

#### Increment/Decrement Operators

- `++`
- `--`

As in

	i++

#### Object Property Access Operator

- `.`

As in

	foo.bar

#### Equality Operators

- `==` (loose-equals)
- `===` (strict-equals)
- `!=` (loose-not-equals)
- `!==` (strict-not-equals)

#### Comparison Operators

- `<` (less than)
- `>` (greater than)
- `<=` (less than or loose-equals)
- `>=` (greater than or loose-equals)

#### Logical Operators

- `&&` (and)
- `||` (or)

### Comments

	// Line comment

	a = 4; // Rest of line comment

	/*
		Block comment
	*/

	a = 4 * 0.5 /* inline comment */ + 3;

### Variables

#### Static Typing versus Dynamic Typing

##### Static Typing

A variable is declared to hold values only of a given type.

##### Dynamic Typing

Variables can hold values of different types.

### Blocks

	{
		a = 4;
		b = 6;
		c = a / b;
	}

### Conditionals

#### if-Statements

	if (index > 5) {
		// true stuff
	}

	if (index === 1) {
		// true stuff
	} else {
		// false stuff
	}

### Loops

#### while-Statements

	while (index < 10) {
		// zero or more repeating stuff
	}

#### do-Statements

	do {
		// one ore more repeating stuff
	} while (index < 10);

#### for-Statements

	for (var i = 0; i < 10; i++) {
		// 10 times repeating stuff
	}

### Functions

	function foo() {
		// stuff
	}

#### Parameters

	function foo(a, b) {
		// stuff with a and b
	}

#### Return Statements

	function foo(a, b) {
		return a + b;
	}

### Scope

#### Lexical Scoping versus Dynamic Scoping


#### Lexical Scope

	function bar() {
		console.log(i); // Error!
	}

	function foo() {
		var i = 5;
		bar();
	}

	foo();

#### Nested Scope

	function foo() {
		var i = 5;

		function bar() {
			console.log(i);
		}

		bar();
	}

	foo();
