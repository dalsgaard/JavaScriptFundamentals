var a = {
    toString: function() {
        return 'foo';
    },
    valueOf: function() {
        return 42;
    }
};

var b = {
    toString: function() {
        return 'bar';
    }/*,
    valueOf: function() {
        return 100;
    }*/
};

console.log(a > b);
