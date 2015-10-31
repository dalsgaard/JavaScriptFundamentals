# Scope

## Compiler Theory

### Tokenizing/Lexing

Breaking up a string of characters into meaningful (to the language) chunks, called tokens.

### Parsing

Taking a stream (array) of tokens and turning it into a tree of nested elements,
which collectively represent the grammatical structure of the program.
This tree is called an Abstract Syntax Tree (AST).

### Code-Generation

The process of taking an AST and turning it into executable code.

## Compiler, Engine and Scope

	var i = 5;
	
- Compiler asks Scope to make a variable `i`.
- Engine asks Scope for the variable `i` and assigns it the value 5.

### RHS- and LHS Look-Ups

Left Hand Side and Right Hand side of an assignment.

	a = 3;
	
In the current scope there is a LHS look-up of `a`

	b = a;
	
In the current scope there is a LHS look-up of `b`, and a RHS look-up of `a`.

	function foo(b) {
		console.log(b);
	}
	foo(3);	
	
In the scope of `foo` there is a LHS look-up `b` (implicite `b = 3`), and a RHS look-up of `b`.

## Nested Scopes

	var a = 1;
	var b = 2;
	
	function foo() {
	
		function bar() {
			var c = 5;
			var d = 6;
			console.log(a, b, c, d); // => 1 3 5 6
		}

		var b = 3;
		var c = 4;
		console.log(a, b, c); // => 1 3 4
		bar();
	}

	console.log(a, b); // => 1 2
	foo();

If a variable look-up fails in a given scope, then the look-up is attempted at that given scope's parent scope - and so on.
	
## Global Scope

The top-level scope has no parent scope, and is called Global Scope.

If a RHS look-up is failing in the Global Scope, the variable is said to be *undeclared*, and a `ReferenceError` is thrown.

If a LHS look-up is failing in the Global Scope, the variable is created (in Global Scope) and returned.

### Aside

Global variables are automatically also properties of the global object (window in browsers, global in node, etc.), so it is possible to reference a global variable not directly by its lexical name, but instead indirectly as a property reference of the global object.

	var x = 7;
	console.log(window.x); // => 7

## Hiding
	
### Principle of Least Privilege

This principle states that in the design of software, such as the API for a module/object, you should expose only what is minimally necessary, and 'hide' everything else.

### Collision Avoidance

Avoid unintended collision between two different identifiers with the same name but different intended usages.


## Function Declaration versus Function Expression

If function is the very first thing in the statement, then it’s a function declaration. Otherwise, it’s a function expression.

	(function foo() {
		// stuff
	});
	
	function bar() {
		// stuff
	}
	
	typeof foo; // => 'undefined'
	typeof bar; // => 'function'	


## Anonymous Versus Named Functions

	setTimeout(function() {
		var a = b;
	}, 1);

	setTimeout(function foo() {
		var a = b;
	}, 1);


## Hoisting

	a = 7;
	
	function foo() {
		a = 5;
		var a;
		console.log(a);
	}
	
	foo();
	console.log(a);
	
Declarations are hoisted.

	a = 7;
	
	function foo() {
		console.log(a);
		var a = 2;
	}
	
	foo();
	
But only the declarations, not the assignments.

	foo();
	bar();

	function foo() {
		// stuff
	}
	
	var bar = function() {
		// stuff
	};
