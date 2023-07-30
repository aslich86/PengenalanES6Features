# Tutorial Pengenalan ke ES6 (ECMAScript 2015) Features

ES6 atau ECMAScript 2015 adalah standar terbaru dari bahasa JavaScript yang diperkenalkan pada tahun 2015. ES6 menyediakan banyak fitur baru dan peningkatan sintaksis yang membantu meningkatkan kualitas dan produktivitas dalam menulis kode JavaScript. Dalam tutorial ini, kita akan membahas beberapa fitur utama ES6 beserta contoh penggunaannya.

## 1. Arrow Function
Arrow function adalah bentuk pendek dari fungsi anonim yang memungkinkan penulisan yang lebih ringkas. Mereka menggunakan sintaksis "=>".

Contoh penggunaan:

```javascript
// Fungsi tradisional
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

## 2. Let dan Const
Sebelum ES6, JavaScript hanya memiliki satu cara untuk mendeklarasikan variabel yaitu menggunakan "var". ES6 memperkenalkan "let" dan "const" untuk mendeklarasikan variabel dengan ruang lingkup (scope) blok.

Contoh penggunaan:

```javascript
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
```

## 3. Template Literal
Template literal memungkinkan Anda menyisipkan ekspresi JavaScript ke dalam string dengan menggunakan tanda backtick (``) dan placeholder `${}`.

Contoh penggunaan:

```javascript
const name = "John";
const age = 30;

// Tanpa template literal
console.log("Nama: " + name + ", Usia: " + age);

// Dengan template literal
console.log(`Nama: ${name}, Usia: ${age}`);
```

## 4. Destructuring
Destructuring memungkinkan Anda untuk mengekstrak nilai dari objek atau array dan menyimpannya ke dalam variabel terpisah.

Contoh penggunaan:

```javascript
// Destructuring objek
const person = { name: "John", age: 30 };
const { name, age } = person;
console.log(name); // Output: "John"
console.log(age); // Output: 30

// Destructuring array
const numbers = [1, 2, 3];
const [x, y, z] = numbers;
console.log(x); // Output: 1
console.log(y); // Output: 2
console.log(z); // Output: 3
```

## 5. Spread Operator
Spread operator memungkinkan Anda untuk "menggabungkan" elemen array atau objek ke dalam array atau objek baru.

Contoh penggunaan:

```javascript
// Menggabungkan array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Menggabungkan objek
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }
```

## 6. Default Parameters
Default parameters memungkinkan Anda untuk memberikan nilai default kepada parameter fungsi jika parameter tersebut tidak diberikan nilai.

Contoh penggunaan:

```javascript
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet(); // Output: "Hello, Guest!"
greet("John"); // Output: "Hello, John!"
```
