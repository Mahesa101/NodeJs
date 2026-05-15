//Require
const fs = require("fs"); //manipulasi file system
const chalk = require("chalk"); //style
const validator = require("validator"); //sistem validasi data

//Pengecekan
//dimana apakah ada sebuah folder Data jika tidak ada buatkan
const dirPath = "./Data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//setelah itu apakah di dalam folder Data ada file contacts jika tidak buatkan
const dataPath = "./Data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

//membaca serta mengubah menjadi array
//Dimana awalnya akan dibaca dulu file contacts setelah dibaca ubah menjadi bentuk array
const loadContact = () => {
  const readJsonContact = fs.readFileSync("Data/contacts.json", "utf-8");
  const contactArray = JSON.parse(readJsonContact);
  return contactArray;
};

//logika untuk mengisi data
//dimana data di isi
const isiContact = (nama, nomer, gmail) => {
  //menuju disini
  const Contact = { nama, gmail, nomer };
  //mengambil fungsi baca dan ubah menjadi array
  const contactArray = loadContact();

  // Cek duplikat
  //dimana apakah data nama yang di masuk kan apakah sama dengan data yang ada di file contacts
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
  //dimana jika ada di dalam data ada gmail maka ini aktif
  if (gmail) {
    //dan saat data gmail yang di masuk kan salah maka ini aktif
    if (!validator.isEmail(gmail)) {
      console.log(
        chalk.bgRed.white.bold(" ✖ Gagal: ") + chalk.red(" Format Gmail salah"),
      );
      return false;
    }
    //jika tidak keluar if
  }

  // Validasi nomer
  //sama hal nya gmail
  if (!validator.isMobilePhone(nomer, "id-ID")) {
    console.log(
      chalk.bgRed.white.bold(" ✖ Gagal: ") +
        chalk.red(" Format Nomer HP salah"),
    );
    return false;
  }
  //setelah data semua di cek maka saat nya semua data di masukan ke contacts melalui konsep array
  contactArray.push(Contact);
  //setelah itu file contacts ubah lagi menjadi string
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

//list
//dimana ia membaca dan Menampilkan semua yang ada di dalam file contacts
const listContact = () => {
  const mencari = loadContact();

  //hasil
  console.log(chalk.green("List Data"));
  console.log(chalk.bold("─────────────────────────────"));
  mencari.forEach((isi, i) => {
    console.log(`${i + 1}.${isi.nama} | ${isi.nomer}`);
  });
  console.log(chalk.bold("─────────────────────────────"));
};

//Detail
//sebuah cara dimana akan menjadi membaca di dalam file dan mencocokkannya dengan apa yang di masukan setelah itu di tampilkan
const detailContact = (nama) => {
  const mencari = loadContact();

  //mencari nama yang sesuai
  const hasil = mencari.find(
    (isi) => isi.nama.toLowerCase() === nama.toLowerCase(),
  );

  //tidak tidak ketemu aktif
  if (!hasil) {
    console.log(
      chalk.bgRed.white.bold(" ✖ Gagal: ") +
        chalk.red(` ${nama} tidak di temukan`),
    );
    return false;
  }

  //Success
  console.log("");
  console.log(chalk.green("Detail Data"));
  console.log(chalk.bold("─────────────────────────────"));
  console.log(chalk.cyan("  Nama: ") + chalk.white(hasil.nama));
  console.log(chalk.cyan("  Nomer Hp: ") + chalk.white(hasil.nomer));
  if (hasil.gmail) {
    console.log(chalk.cyan("  Gmail: ") + chalk.white(hasil.gmail));
  }
  console.log(chalk.bold("─────────────────────────────"));
};

//delete
//sebuah fungsi dimana akan membuat array baru untuk di timpa oleh array lama
const deleteContact = (nama) => {
  const mencari = loadContact();
  //membuat array baru dengan menyeleksi dimana saat sesui dengan apa yang diisi akan di kecualikan
  const DataBaru = mencari.filter((eleminasi) => {
    return eleminasi.nama.toLowerCase() !== nama.toLowerCase();
  });

  //dimana saat kondisi sama maka ini aktif
  if (mencari.length === DataBaru.length) {
    console.log(
      chalk.bgRed.white.bold(" ✖ Gagal: ") +
        chalk.red(` ${nama} Tidak ditemukan`),
    );
    return false;
  }
  //setelah itu semua nya akan di timpa oleh array baru atau di tulis ulang dengan menimpa array lama dengan array baru
  fs.writeFileSync("Data/contacts.json", JSON.stringify(DataBaru, null, 2));

  // Success message
  console.log("");
  console.log(
    chalk.bgGreen.white.bold(" ✔ Berhasil! ") +
      chalk.green(` Data ${nama} berhasil dihapus`),
  );
};

module.exports = { isiContact, listContact, detailContact, deleteContact };
