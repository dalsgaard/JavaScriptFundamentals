# Promise

## Producing a Promise

```js
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let ms = Date.now();
    if (ms % 2 === 0) {
      resolve(ms);
    } else {
      reject(ms);
    }
  }, 1);
});
```

## Consuming a Promise

```js
promise.then(
  function (value) {
    console.log(`Value ${value}`);
  },
  function (reason) {
    console.log(`Reason ${reason}`);
  }
);
```

## Chaining

```js
let q = promise.then(
  function (value) {
    console.log(`Value ${value}`);
  },
  function (reason) {
    console.log(`Reason ${reason}`);
  }
);

setTimeout(function () {
  console.log(q);
}, 2);
```

```js
let q = promise.then(
  function (value) {
    console.log(`Value ${value}`);
    return value;
  },
  function (reason) {
    console.log(`Reason ${reason}`);
    return reason;
  }
);
```

### Only handling fulfillments

```js
let q = promise.then(
  function (value) {
    console.log(`Value ${value}`);
  }
);
```

### Only handling rejections

```js
let q = promise.then(
  null,
  function (reason) {
    console.log(`Reason ${reason}`);
  }
);
```

### `catch`

```js
let q = promise.catch(
  function (reason) {
    console.log(`Reason ${reason}`);
  }
);
```

### Combining `then` and `catch`

```js
promise.then(
  function (value) {
    console.log(`Value ${value}`);
  }
).catch(
  function (reason) {
    console.log(`Reason ${reason}`);
  }
);
```

### Multiple `then`

```js
promise.then(
  function (value) {
    console.log(`Value ${value}`);
    return value;
  }
).then(
  function (value) {
    console.log(`Value again ${value}`);
  }
).catch(
  function (reason) {
    console.log(`Reason ${reason}`);
  }
);
```

### `throw`

```js
promise.then(
  function (value) {
    console.log(`Value ${value}`);
    return value;
  }
).then(
  function (value) {
    console.log(`Value again ${value}`);
    throw value;
  }
).catch(
  function (reason) {
    console.log(`Reason ${reason}`);
  }
);
```

### Returning a *Promise*

```js
function createPromise(d) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let ms = Date.now();
      if (ms % d === 0) {
        reject(ms);
      } else {
        resolve(ms);
      }
    }, d);
  });
}

let promise = createPromise(5);

let q = promise.then(
  function (value) {
    console.log(`Value ${value}`);
    return createPromise(5);
  }
).then(
  function (value) {
    console.log(`Value ${value}`);
  }
).catch(
  function (reason) {
    console.log(`Reason ${reason}`);
  }
);
```

### `all` and `race`

#### `all`

```js
const ps = [createPromise(12), createPromise(8), createPromise(10)];

Promise.all(ps).then(
  function (values) {
    console.log(`Values ${values}`);
  }
).catch(
  function (reason) {
    console.log(`Reason ${reason}`);
  }
);
```

#### `race`

```js
const ps = [createPromise(12), createPromise(8), createPromise(10)];

Promise.race(ps).then(
  function (value) {
    console.log(`Value ${value}`);
  }
).catch(
  function (reason) {
    console.log(`Reason ${reason}`);
  }
);
```

### `resolve` and `reject`

Non-promise values are *resolved* using `Promise.resolve`

```js
Promise.resolve(42).then(
  function (value) {
    console.log(`Values ${value}`);
  }
);
```

Non-promise values are *rejected* using `Promise.reject`

```js
Promise.reject(13).catch(
  function (reason) {
    console.log(`Reason ${reason}`);
  }
);
```

## Links

- [ECMAScript 6 promises (2/2): the API](http://www.2ality.com/2014/10/es6-promises-api.html)
- [MDN Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
