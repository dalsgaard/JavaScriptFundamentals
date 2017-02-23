# Block Scope

### `let`

```js
{
  let a = 5;
  console.log(a);
}
```

#### Hoisting

There is *no* hoisting of `let` declarations.

```js
{
  console.log(a); // ReferenceError
  let a = 5;
}
```

#### Redeclaration

Redeclaration is not allowed.

```js
{
  let a = 5;
  let a = 6; // TypeError
}
```

### `const`

```js
{
  const A = 5;
}
```

#### Reassignment

```js
{
  const A = 5;
  A = 6; // TypeError
}
```

#### References

```js
{
  const A = [];
  A.push(1);
}
```

## Links

- [Can I Use - let](http://caniuse.com/#feat=let)
- [Can I Use - const](http://caniuse.com/#feat=const)
