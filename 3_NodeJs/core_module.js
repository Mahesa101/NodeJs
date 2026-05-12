// Core module

const fs = require("fs");

// //menuliskan string ke file(synchronous);
// try {
//   fs.writeFileSync("test.txt", "hello word secara Synchronous");
// } catch (e) {
//   console.log(e);
// }

// //menuliskan string ke file(Asynchronous);
// fs.writeFile("test.txt", "hello word secara Asynchronous", (e) =>
//   console.log(e),
// );

// //membaca isi file secara Synchronous
// const Hello = fs.readFileSync("test.txt", "utf-8");
// console.log(`Synchronous: ${Hello}`);

// //membaca isi file secata Asynchronous
// const HelloAsync = fs.readFile("test.txt", "utf-8", (e, d) => {
//   if (e) {
//     throw e;
//   }
//   console.log(`Asynchronous: ${d}`);
// });
// console.log(HelloAsync);

//ReadLine
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

rl.question("Siapa nama mu? ", (nama) => {
  rl.question("Berapa nomer mu? ", (nomer) => {
    const contact = {nama,nomer};
    const file = fs.readFileSync("contacts.json", "utf8");
    const contacts = JSON.parse(file);

    contacts.push(contact);
   fs.writeFileSync('contacts.json', JSON.stringify(contacts))

    rl.close();
  });
});
