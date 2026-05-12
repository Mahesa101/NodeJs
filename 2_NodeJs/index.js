// Import Core Modules & Third Party Modules
const fileSystem = require("fs");
// const moment = require("moment");

// Import Local Module (file coba.js)
const myLocalUtils = require("./coba");

/**
 * Local arrow function untuk memberikan sapaan "HI"
 * @param {string} inputName
 */
const displayGreeting = (inputName) => `HI ${inputName}`;

// --- EXECUTION SECTION ---

// Memanggil fungsi lokal
console.log(displayGreeting("Heru"));

// Memanggil function greetFriend dari module 'coba.js'
console.log(myLocalUtils.greetFriend("king"));

// Menampilkan nilai konstanta Pi
console.log("Value of PI:", myLocalUtils.piValue);

// Mengakses objek playerData dan menjalankan method useSkill
console.log(myLocalUtils.playerData);
console.log(myLocalUtils.playerData.useSkill());

// Membuat instance baru dari LoggerClass (akan men-trigger console.log di constructor)
const simpleInstance = new myLocalUtils.LoggerClass();
