# Objects

## Object

#### Object literal
```
var foo = {};
```

#### Object literal with content
```
var foo = {
	bar: 1,
	baz: 2
};
```

#### Object constructor
```
var foo = new Object();
```

#### Property access
```
var a = {};

a.foo = 5;
console.log(a['foo']);
```

##### When using `.` operator, property name has to be a *legal identifier*
```
a['bar-baz'] = 7;
console.log(a.foo-bar); // => Throws Error
```

#### Property names is always strings

```
var a = {};

a[true] = 2;
a[42] = 4;

console.log(a['true']); // => 2
console.log(a['42']); // => 4
```

## Array

```
var foo = [];
```

```
var foo = [1, 'baz', false, undefined];
```

```
var foo = new Array();
```

```
var foo = [];
foo[3] = 56;
console.log(foo.length);
```
```
var foo = [];
foo[3] = 56;
foo.bar = 'WAT!';
console.log(foo.length);
```
