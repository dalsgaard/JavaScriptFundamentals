# Array

### `isArray`

```js
var a = [1,2,3,4];
Array.isArray(a); // => true
```

### `forEach`

```js
[1,2,3,4].forEach(function (element) {
  console.log(element);
});
```

### `map`

```js
var a = [1,2,3,4].map(function (element) {
  return element * element;
});
console.log(a);
```

### `filter`

```js
var a = [1,2,3,4].filter(function (element) {
  return element % 2 === 0;
});
console.log(a);
```

### `every`

```js
var b = [1,2,3,4].every(function (element) {
  return element < 5;
});
console.log(b);
```

### `some`

```js
var b = [1,2,3,4].some(function (element) {
  return element > 3;
});
console.log(b);
```

### `reduce`

```js
var a = [1, 2, 4];

var x = a.reduce(function (previous, current, index, array) {
  return previous * previous * current;
});
console.log(x);
```

```js
var a = [1, 2, 4];

var x = a.reduce(function (previous, current) {
  return previous * previous * current;
}, 1);
console.log(x);
```

### `reduceRight`

```js
var a = [1, 2, 4];

var x = a.reduceRight(function (previous, current, index, array) {
  return previous * previous * current;
});
console.log(x);
```

```js
var a = [1, 2, 4];

var x = a.reduceRight(function (previous, current) {
  return previous * previous * current;
}, 1);
console.log(x);
```

### `indexOf`

```js
var a = [1, 2, 4, 1, 2, 4];
a.indexOf(2); // => 1
a.indexOf(3); // => -1
a.indexOf(2, 2); // => 4
```

### `lastIndexOf`

```js
var a = [1, 2, 4, 1, 2, 4];
a.lastIndexOf(2); // => 4
a.lastIndexOf(3); // => -1
a.lastIndexOf(2, -3); // => 1
```
