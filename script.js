const a = 10;
const b = 20;

function sum(a, b) {
   return a + b;
}
function c(x) {
    return x += 100;
}
function main (a = 2, b = 3, c) { 
    if(typeof(c) == `function`) {
        return c(sum(a, b));
    } else {
        return sum(a, b);
    }
}

let s = main(a, b, c);
console.log(s);