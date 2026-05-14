const { contact ,pertanyaan} = require("./logic");

const Logika = async () => {
  const Nama = await pertanyaan("Masukan Nama: ");
  const Gmail = await pertanyaan("Masukan Gmail: ");
  const Nomer = await pertanyaan("Masukan Nomer: ");

  contact(Nama, Nomer, Gmail);
};
Logika();
