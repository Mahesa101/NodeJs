/**
 * CORE MODULES
 */
const fs = require("fs");
const readline = require("node:readline");
const { stdin: inputSource, stdout: outputSource } = require("node:process");

// ---------------------------------------------------------
// SECTION 1: FILE SYSTEM OPERATIONS (SYNC vs ASYNC)
// ---------------------------------------------------------

// Menuliskan string ke file secara Synchronous (Memblokir eksekusi kode selanjutnya sampai selesai)
try {
  fs.writeFileSync("test.txt", "hello word secara Synchronous");
} catch (error) {
  console.error("Terjadi error saat write sync:", error);
}

// Menuliskan string ke file secara Asynchronous (Non-blocking, berjalan di background)
fs.writeFile("test.txt", "hello word secara Asynchronous", (writeError) => {
  if (writeError) {
    console.error("Gagal menulis file secara Async:", writeError);
    return;
  }
});

// Membaca isi file secara Synchronous
// Hasilnya langsung disimpan ke variabel karena operasi ini ditunggu sampai selesai.
const fileContentSync = fs.readFileSync("test.txt", "utf-8");
console.log(`Synchronous Read Result: ${fileContentSync}`);

// Membaca isi file secara Asynchronous
// Perhatikan: variabel 'asyncOperationResult' akan bernilai 'undefined'
// karena fs.readFile tidak mengembalikan data secara langsung, melainkan melalui callback.
const asyncOperationResult = fs.readFile(
  "test.txt",
  "utf-8",
  (readError, fileData) => {
    if (readError) {
      throw readError;
    }
    console.log(`Asynchronous Read Result: ${fileData}`);
  },
);

// Log ini akan muncul sebagai 'undefined' karena sifat Async
console.log("Variabel hasil readFile async:", asyncOperationResult);

// ---------------------------------------------------------
// SECTION 2: READLINE & CONTACT SYSTEM
// ---------------------------------------------------------

const inputInterface = readline.createInterface({
  input: inputSource,
  output: outputSource,
});

/**
 * Logika Bertanya: Mengambil input user dan menyimpannya ke dalam file JSON.
 * Ini menggunakan teknik nested callbacks.
 */
inputInterface.question("Siapa nama mu? ", (userName) => {
  inputInterface.question("Berapa nomer mu? ", (phoneNumber) => {
    // Membuat objek contact baru dari input
    const newContact = {
      nama: userName,
      nomer: phoneNumber,
    };

    // Membaca data lama dari file contacts.json
    const rawJsonContent = fs.readFileSync("contacts.json", "utf8");

    // Parsing string JSON menjadi Array of Objects
    const contactList = JSON.parse(rawJsonContent);

    // Menambahkan data baru ke dalam list
    contactList.push(newContact);

    // Menyimpan kembali list yang terbaru ke file (diubah kembali jadi string JSON)
    fs.writeFileSync("contacts.json", JSON.stringify(contactList, null, 2));

    console.log("Data berhasil disimpan ke contacts.json!");

    // Menutup interface readline agar program berhenti
    inputInterface.close();
  });
});
