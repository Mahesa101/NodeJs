const yargs = require("yargs");
const { isiContact, listContact,detailContact,deleteContact } = require("./logic");

yargs
  .command({
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
      isiContact(argv.nama, argv.noHp, argv.gmail);
    },
  })
  .demandCommand();

//list contact nama & no Hp
yargs.command({
  command: "list",
  describe: "Menampilkan semua List Contact",
  handler() {
    listContact();
  },
});

//Detail
yargs.command({
  command: "detail",
  describe: "Menampilkan detail sebuah Contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailContact(argv.nama);
  },
});


//Hapus
yargs.command({
  command: "delete",
  describe: "Menghapus sebuah Contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteContact(argv.nama);
  },
});


yargs.parse();


//Penggunaan


//add
//node Contact_App.js add --nama="agus" --noHp="081274839201"

//list
//node Contact_App.js list

//detail
//node Contact_App.js detail --nama="agus"

//delete
//node Contact_App.js delete --nama="agus"