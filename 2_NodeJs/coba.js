/**
 * Function untuk menyapa user.
 * @param {string} userName - Nama yang akan disapa.
 */
const greetFriend = (userName) => {
  return `Hello, friends ${userName}`;
};

// Konstanta nilai Pi (sebelumnya variabel 'x')
const PI_CONSTANT = 3.14;

// Objek yang merepresentasikan data pemain (sebelumnya 'players')
// Menggunakan singular 'playerData' karena ini adalah satu instance objek.
const playerData = {
  name: "Najau",
  level: 50,
  playerClass: "Warrior",

  /**
   * Method untuk mensimulasikan penggunaan skill berdasarkan class.
   */
  useSkill() {
    return `${this.name} menggunakan skill khusus dari class ${this.playerClass}!`;
  },
};

/**
 * Class sederhana untuk demonstrasi inisialisasi (sebelumnya class 'H')
 */
class LoggerClass {
  constructor() {
    console.log("wowowo");
  }
}

/**
 * Menggabungkan semua variabel dan function ke dalam module exports.
 * Note: Sebelumnya module.exports dipanggil berkali-kali,
 * di sini kita jadikan satu objek agar lebih clean dan efisien.
 */
module.exports = {
  piValue: PI_CONSTANT,
  greetFriend,
  playerData,
  LoggerClass,
};
