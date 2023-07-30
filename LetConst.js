// Menggunakan var (function scope)
function exampleVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Output: 10
}

// Menggunakan let (block scope)
function exampleLet() {
    if (true) {
        let y = 20;
    }
    console.log(y); // Error: y is not defined
}

// Menggunakan const (block scope, nilai tetap)
const PI = 3.14;
