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

#### Literals

	var a = 'single';
	var b = "double";

#### typeof

	var a = 'foo';
	typeof a; // 'string'


### number

#### Literals

	var a = 1;
	var b = 2.3;

#### typeof

	var a = 2;
	typeof a; // 'number'


### boolean

#### Literals

	var a = true;
	var b = false;

#### typeof

	var a = false;
	typeof a; // 'boolean'


### null

#### Literals

	var a = null;

#### typeof

	var a = null;
	typeof a; // 'object' - Bug!


### undefined

#### Literals

	var a = undefined;

#### typeof

	var a;
	typeof a; // 'undefined'


### object

#### Literals

	var a = {
		b: 5,
		c: 'foo'
	};

#### typeof

	var a;
	typeof a; // 'object'

#### Property Accessors

	var b = a.b;
	var c = a['c'];

### Sub-Types of Object

- Array
- Function


### Array

#### Literals

	var a = [1, 2, 4, 8];
	var b = [null, false, 5, 'foo', undefined];
	var c = [];
	var d = [[1, 3], [2, 4]]; 

#### typeof

	var a = [];
	typeof a; // 'object'

#### Accessors

	var i = a[2];
	a[4] = 5;

#### Build-In Properties

	var a = [1, 2, 4];
	a.length; // 3


### Function

#### Literals

	function foo(a, b, c) {
		// stuff
	}

	var bar = function(a, b, c) {
		// stuff
	}

	var baz = function foo(a, b, c) {
		// stuff
	};

#### typeof

	function foo() {}
	typeof foo; // 'object'

#### Build-In Properties

	function foo(a, b, c) {
		return a + b + c;
	}
	a.length; // 3


## Variables

### Naming

An identifier must start with a-z, A-Z, $, or _. It can then contain any of those characters plus the numerals 0-9.

There is a list of reserved words that cannot be used as variable names.


## Function Scope

JavaScript uses a kind of Lexical Scope called Function Scope where the function is the scope barriers.

### Hoisting

Every variable declaration is hoisted to the top of the scope. 


## Conditionals

### More on if-else-Statements

	if (i < 5) i = 0;
	
	if (i < 5) i = 0 else i = 10;
	
	if (i < 5) {
		// stuff
	} else if (i < 10) {
		// stuff
	}

### switch-Statements

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


## First-Order Functions

In computer science, a programming language is said to have first-class functions if it treats functions as first-class citizens.
Specifically, this means the language supports passing functions as arguments to other functions, returning them as the values from other functions, and assigning them to variables or storing them in data structures.

### Passing functions as arguments to other functions

	function foo(bar) {
		bar();
	}

#### The build-in setTimeout function

	setTimeout(function() {
		// stuff
	}, 1000);

#### Returning them as the values from other functions

	function foo() {
		return function() {
			// stuff
		};
	}

#### Assigning them to variables

	var foo = function() {
		// stuff
	};

#### Storing them in data structures

	var foo = {
		bar: function() {
			// stuff
		}
	};


### Immediately Invoked Function Expressions (IIFEs)

	(function() {
		//stuff
	})();


### Closure

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
