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

```
var a = new String('foo');
```

[MDN String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)


## Number()

```
var a = new Number(42);
```

[MDN Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)


## Boolean()

```
var a = new Boolean(false);
```

[MDN Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)


## Boxing

```
var a = 'foo';
console.log(a.length);
console.log(a.toUpperCase());
```

## Unboxing

```
var a = new String('foo');
var b = new Boolean(false);
var c = new Number(42);

console.log(a.valueOf() === 'foo');
console.log(b.valueOf() === false);
console.log(c.valueOf() === 42);
```

```
var a = new Number(42);
var b = a + 0;

console.log(typeof a, typeof b);
```


## Object()

```
var a = new Object();
```

[MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)


## Function()

```
var f = new Function('a', 'b', 'return a + b;');
var g = new Function('a,b', 'return a + b;');
```

[MDN Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)


## Array()

```
var a = new Array();
var b = new Array(12, 'foo', false);
var c = new Array(3);
```

[MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


## Date()

```
var now = new Date();
```

[MDN Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)


## RegExp()

```
var re = new RegExp('\s*foo\s*', 'i');
```

[MDN RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)


## Error()

```
throw new Error('WAT!');
```

### stack

```
var err = new Error('WAT!');
console.log(err.stack);
```

[MDN Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

