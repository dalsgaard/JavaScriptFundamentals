# Properties

### `getOwnPropertyDescriptor`

```js
var foo = {
  a: 2
};
var desc = Object.getOwnPropertyDescriptor(foo, 'a');
console.log(desc);
```

### `defineProperty`

```js
var foo = { };
Object.defineProperty(foo, 'a', {
  value: 3,
  writable: true,
  enumerable: true,
  configurable: true
});
console.log(foo);
```

#### writable

```js
var foo = { };
Object.defineProperty(foo, 'a', {
  value: 3,
  writable: false,
  enumerable: true,
  configurable: true
});
console.log(foo);
foo.a = 4;
console.log(foo);
```

#### configurable

```js
var foo = { };

Object.defineProperty(foo, 'a', {
  value: 3,
  writable: false,
  enumerable: true,
  configurable: false
});

Object.defineProperty(foo, 'a', {
  writable: true,
  configurable: true
}); // => TypeError
```

##### *writable* to false

```js
var foo = { };

Object.defineProperty(foo, 'a', {
  value: 3,
  writable: true,
  enumerable: true,
  configurable: false
});

Object.defineProperty(foo, 'a', {
  writable: false
});
```

##### `delete`

```js
var foo = { };

Object.defineProperty(foo, 'a', {
  value: 3,
  writable: true,
  enumerable: true,
  configurable: false
});

delete foo.a;
console.log(foo);
```

#### enumerable

```js
var foo = {
  a: 1,
  b: 2
};

Object.defineProperty(foo, 'c', {
  value: 3,
  writable: true,
  enumerable: false,
  configurable: true
});

for (var key in foo) {
  console.log(key);
}
```

### `defineProperties`

```js
var foo = { };

Object.defineProperties(foo, {
  a: {
    value: 3,
    writable: true,
    enumerable: true,
    configurable: true
  },
  b: {
    value: 5,
    writable: true,
    enumerable: true,
    configurable: true
  }
});

console.log(foo);
```

## Immutability

### `preventExtensions`

```js
var foo = {
  a: 1,
  b: 2
};
Object.preventExtensions(foo);
foo.c = 5;
console.log(foo);
```

### `isExtensible`

```js
console.log(Object.isExtensible(foo));
```

### `seal`

```js
var foo = {
  a: 1,
  b: 2
};
Object.seal(foo);
delete foo.a;
foo.b = 5;
console.log(foo);
```

### `isSealed`

```js
console.log(Object.isSealed(foo));
```

### `freeze`

```js
var foo = {
  a: 1,
  b: 2
};
Object.freeze(foo);
foo.b = 5;
console.log(foo);
```

### `isFrozen`

```js
console.log(Object.isFrozen(foo));
```

## Getters and Setters

### *get*

```js
var foo = { };

Object.defineProperty(foo, 'a', {
  get: function () {
    return 42;
  }
});

console.log(foo.a);
```

```js
var foo = {
  get a() {
    return 42;
  }
};

console.log(foo.a);
```

### *set*

```js
var foo = { };

Object.defineProperty(foo, 'a', {
  get: function () {
    return this._a;
  },
  set: function (a) {
    this._a = a;
  }
});

foo.a = 42;
console.log(foo.a);
```

```js
var foo = {
  get a() {
    return this._a;
  },
  set a(a) {
    this._a = a;
  }
};

foo.a = 42;
console.log(foo.a);
```

## Links

- [MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
