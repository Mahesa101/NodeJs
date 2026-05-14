//Require
const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");
const { stdin: input, stdout: output } = require("node:process");

//Pengecekan
const dirPath = "./Data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
const dataPath = "./Data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const contact = (nama, nomer, gmail) => {
  const Contact = { nama, gmail, nomer };

  const readJsonContact = fs.readFileSync("Data/contacts.json", "utf-8");
  const contactArray = JSON.parse(readJsonContact);

  // Cek duplikat
  const duplikat = contactArray.find(
    (x) => x.nama === nama && x.nomer === nomer,
  );
  if (duplikat) {
    console.log(
      chalk.bgRed.white.bold(" ✖ Gagal: ") +
        chalk.red(" Data sudah ada, isi dengan data lain"),
    );
    return false;
  }

  // Validasi gmail
  if (gmail) {
    if (!validator.isEmail(gmail)) {
      console.log(
        chalk.bgRed.white.bold(" ✖ Gagal: ") + chalk.red(" Format Gmail salah"),
      );
      return false;
    }
  }

  // Validasi nomer
  if (!validator.isMobilePhone(nomer, "id-ID")) {
    console.log(
      chalk.bgRed.white.bold(" ✖ Gagal: ") +
        chalk.red(" Format Nomer HP salah"),
    );
    return false;
  }

  contactArray.push(Contact);
  fs.writeFileSync("Data/contacts.json", JSON.stringify(contactArray, null, 2));

  // Success message
  console.log("");
  console.log(
    chalk.bgGreen.white.bold(" ✔ Berhasil! ") +
      chalk.green(" Data berhasil disimpan"),
  );
  console.log(chalk.bold("─────────────────────────────"));
  console.log(chalk.cyan("  Nama  : ") + chalk.white(nama));
  console.log(chalk.cyan("  Nomer : ") + chalk.white(nomer));
  if (gmail) {
    console.log(chalk.cyan("  Gmail : ") + chalk.white(gmail));
  }
  console.log(chalk.bold("─────────────────────────────"));
  console.log("");
};

module.exports = { contact };
