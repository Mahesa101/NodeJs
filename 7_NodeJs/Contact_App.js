const yargs = require("yargs");
const { contact } = require("./logic");

yargs.command({
  command: "add",
  describe: "Menambahkan Data contact baru",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
    gmail: {
      describe: "Isi dengan mail",
      demandOption: false,
      type: "string",
    },
    noHp: {
      describe: "Isi nomer Hp",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
  contact(argv.nama,argv.noHp,argv.gmail);
  },
}).parse();
