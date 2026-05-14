//Require
const fs = require("fs"); //sebuah cara mengecek file
const readline = require("node:readline"); //method baca
const { stdin: input, stdout: output } = require("node:process"); //mengambil method input dan output dari method process atau sebuah method proses
const rl = readline.createInterface({ input, output }); //memberikan value rl sebuah method input output

//Pengecekan
const dirPath = "./Data"; //mencari folder data
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath); //jika kondisi ini true maka akan di buat sebuah folder Data
}
const dataPath = "./Data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8"); //jika kondisi ini true akan di buat sebuah file contacts json yang nilai def nya array serta dengan tipe nya string
}

//Tanpa callback Biasa
const pertanyaan = (MasukanPertanyaan) => {
    //return itu menghasilkan sebuah Promise yang akan membuat sebuah pertanyaan di terminal
  return new Promise((Berhasil, gagal) => {
    rl.question(MasukanPertanyaan, (nilai) => {
      Berhasil(nilai);
    });
  });
};

const contact = (nama, nomer, gmail) => {
  const Contact = {
    nama: nama,
    gmail: gmail,
    nomer: nomer,
  };
  //dimana file akan membaca file contacts
  const readJsonContact = fs.readFileSync("Data/contacts.json", "utf-8");
  //setelah itu akan mengubah nya menjadi array
  const contactArray = JSON.parse(readJsonContact);
  //setealh itu array akan di isi dengan nilai yang di beri 
  contactArray.push(Contact);

  //setelah itu semua nilai array di ubah menjadi string
  fs.writeFileSync("Data/contacts.json", JSON.stringify(contactArray, null, 2));
  console.log("Data berhasil disimpan ke Data Contact");
  rl.close();
};

module.exports = { pertanyaan, contact };
