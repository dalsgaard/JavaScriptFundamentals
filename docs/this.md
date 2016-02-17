# this

```js
function hello() {
  console.log("Hello, I am " + this.name);
}

var kim = {
  name: "Kim"
};

var sophus = {
  name: "Sophus"
};

hello.call(kim);
hello.call(sophus);
```

`this` is neither a reference to the function itself,
nor is it a reference to the function’s lexical scope.


#### Call-Site

The location in code where a function is called.

```js
function hello() {
  // stuff
}

var kim = {}

hello.call(kim); // Call-Site
```

## Rules

- Default binding
- Implicit binding
- Explicit binding
- Hard binding (Special case of explicit binding)
- `new` binding


### Default Binding

With _default binding_ `this` equals _global scope_.

```js
function foo() {
  console.log(this.a);
}

var a = 3;

foo();
```

And to be sure

```js
function foo() {
  var a = 4;

  function bar() {
    console.log(this.a);
  }

  bar();
}

var a = 3;

foo();
```

#### Aside: Using globals in NodeJS

- https://nodejs.org/api/globals.html
- http://stackoverflow.com/questions/10987444/how-to-use-global-variable-in-node-js/27031734#27031734


### Implicit Binding

```js
function hello() {
  console.log("Hello, I am " + this.name);
}

var kim = {
  name: "Kim"
};
kim.hello = hello;

kim.hello();
```

The object the function is a property on when called.

```js
function foo() {
  console.log(this.a);
}

var bar = {
  a: 2,
  baz: {
    a: 3,
    foo: foo
  }
};

bar.baz.foo();
```

#### When implicit is lost

```js
var foo = {
  bar: 5,
  baz: function() {
    console.log(this.bar);
  }
};

setTimeout(foo.baz, 10);
```

A function reference is given as a callback.

```js
var foo = {
  bar: 5,
  baz: function() {
    setTimeout(function() {
      console.log(this.bar);
    }, 10);
  }
};

foo.baz();
```

A callback is created inside a function.


### Explicit Binding

```js
function foo(b, c) {
  console.log(this.a + b + c);
}

var bar = { a: 5 };

foo.call(bar, 1, 2);
foo.apply(bar, [3, 4]);
```

### Hard Binding

```js
function foo() {
  console.log(this.a);
}

var bar = { a: 5 };
bar.foo = function() {
  foo.call(bar);
};

bar.foo();
```

#### ES5 - Function.prototype.bind

```js
function foo() {
  console.log(this.a);
}

var bar = { a: 5 };

var baz = foo.bind(bar);
```

### new Binding

```js
function foo() {
  this.a = 4;
}

var bar = new foo();
console.log(bar.a);
```
