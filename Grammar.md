# Grammar

## Operator Precedence

```
var d = a && b || c ? c || b ? a : c && b : a;
```

[MDN Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)


## Short Circuited

```
var a = 0;
var b = 0;

true && a++;
false && b++;

console.log(a, b);
```

```
var a = 0;
var b = 0;

true || a++;
false || b++;

console.log(a, b);
```


## Associativity

```
console.log(true ? false : true ? true : true);
```

