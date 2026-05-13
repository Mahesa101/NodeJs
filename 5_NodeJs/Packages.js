// Third-party modules (install via npm first)
const dataValidator = require("validator");
const terminalStyler = require("chalk");

// Core modules
const readlineModule = require("node:readline");
const {
  stdin: standardInput,
  stdout: standardOutput,
} = require("node:process");

// Inisialisasi interface untuk interaksi CLI
const cliInterface = readlineModule.createInterface({
  input: standardInput,
  output: standardOutput,
});

/**
 * LOGIC CHECK: Validasi nomor telepon secara statis.
 * Output: boolean (true/false) tergantung format 'id-ID' (Indonesia).
 */
const phoneNumberToCheck = "082116013724";
const isPhoneValid = dataValidator.isMobilePhone(phoneNumberToCheck, "id-ID");
console.log(`Is Phone Valid? ${isPhoneValid}`);

/**
 * INTERACTION: Meminta input email dari user.
 * Flow: Question -> Validation -> Styled Output.
 */
cliInterface.question("Apa gmail mu? ", (inputEmail) => {
  // Memeriksa apakah input user memenuhi kriteria format email yang benar
  const isValidEmailFormat = dataValidator.isEmail(inputEmail);

  if (isValidEmailFormat) {
    // Menggunakan chalk untuk memberikan warna pada output terminal
    const labelHeader = terminalStyler.blue("Gmail");
    const emailValue = terminalStyler.red(inputEmail);

    console.log(`${labelHeader}: ${emailValue}`);
  } else {
    // Pesan jika format email tidak sesuai
    console.log(
      terminalStyler.yellow("Format email yang kamu masukkan salah!"),
    );
  }

  // Menutup interface agar program tidak "gantung" (hang)
  cliInterface.close();
});
