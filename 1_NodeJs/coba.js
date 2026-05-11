/**
 * MODULE: coba.js
 * Deskripsi: Menyimpan fungsi-fungsi utility terkait sapaan.
 */

// Fungsi lokal yang didefinisikan di dalam module
function sayHello(name) {
  return `Hello, friends ${name}`;
}

// MENGESKPOR FUNGSI
// Tanpa baris ini, file lain tidak akan bisa melihat atau menggunakan fungsi sayHello.
module.exports = sayHello;
