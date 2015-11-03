# Objects

## Object

#### Object literal

```js
var foo = {};
```

#### Object literal with content

```js
var foo = {
	bar: 1,
	baz: 2
};
```

#### Object constructor

```js
var foo = new Object();
```

#### Property access

```js
var a = {};

a.foo = 5;
console.log(a['foo']);
```

##### When using `.` operator, property name has to be a *legal identifier*

```js
a['bar-baz'] = 7;
console.log(a.bar-baz); // => Throws Error
```

#### Property names is always strings

```js
var a = {};

a[true] = 2;
a[42] = 4;

console.log(a['true']); // => 2
console.log(a['42']); // => 4
```

[MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)


## Array

#### Array literal

```js
var foo = [];
```

#### Array literal with content

```js
var foo = [1, 'baz', false, undefined];
```

#### Array constructor

```js
var foo = new Array();
```

#### `length` property

```js
var foo = [];
foo[3] = 56;
console.log(foo.length);
```

```js
var foo = [];
foo[3] = 56;
foo.bar = 'WAT!';
console.log(foo.length);
```
[MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
