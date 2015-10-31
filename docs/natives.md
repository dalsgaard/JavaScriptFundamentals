# Natives

- String()
- Number()
- Boolean()
- Object()
- Function()
- Array()
- Date()
- RegExp()
- Error()


## String()

```js
var a = new String('foo');
```

[MDN String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)


## Number()

```js
var a = new Number(42);
```

[MDN Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)


## Boolean()

```js
var a = new Boolean(false);
```

[MDN Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)


## Boxing

```js
var a = 'foo';
console.log(a.length);
console.log(a.toUpperCase());
```

## Unboxing

```js
var a = new String('foo');
var b = new Boolean(false);
var c = new Number(42);

console.log(a.valueOf() === 'foo');
console.log(b.valueOf() === false);
console.log(c.valueOf() === 42);
```

```js
var a = new Number(42);
var b = a + 0;

console.log(typeof a, typeof b);
```


## Object()

```js
var a = new Object();
```

[MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)


## Function()

```js
var f = new Function('a', 'b', 'return a + b;');
var g = new Function('a,b', 'return a + b;');
```

[MDN Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)


## Array()

```js
var a = new Array();
var b = new Array(12, 'foo', false);
var c = new Array(3);
```

[MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


## Date()

```js
var now = new Date();
```

[MDN Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)


## RegExp()

```js
var re = new RegExp('\s*foo\s*', 'i');
```

[MDN RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)


## Error()

```js
throw new Error('WAT!');
```

### stack

```js
var err = new Error('WAT!');
console.log(err.stack);
```

[MDN Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
