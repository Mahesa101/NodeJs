/**
 * MAIN ENTRY POINT: index.js
 * Deskripsi: Menggabungkan berbagai module dan mengeksekusi logic utama.
 */

// MENGIMPORT MODULE LOKAL
// Kita menggunakan './' untuk memberitahu Node.js bahwa file ada di folder yang sama.
const sayHello = require("./coba");

// Fungsi lokal (hanya hidup di file ini)
const sayHi = (nama) => `HI ${nama}`;

// Eksekusi fungsi lokal
console.log(sayHi("Heru"));

// Eksekusi fungsi yang di-import dari module 'coba.js'
console.log(sayHello("king"));
