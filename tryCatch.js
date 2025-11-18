function bagiAngka(a, b) {
  try {
    if (b === 0) {
      throw new Error("Tidak bisa membagi dengan nol!");
    }

    let hasil = a / b;
    console.log("Hasil pembagian:", hasil);
  } catch (error) {
    console.log("Error:", error.message);
  }

  // Bagian yang memunculkan error variabel tidak ditemukan
  // try {
  //   console.log(angka22);
  // } catch (error) {
  //   console.log("Terjadi kesalahan lain:", error.message);
  // }
}

// --- PEMANGGILAN YANG AMAN TANPA ReferenceError ---
let angka1 = 20;
let angka2 = 0;
try {
  bagiAngka(angka1, angka2);
} catch (error) {
  console.log("Terjadi kesalahan lain:", error.message);
}

console.log("Program selesai.");
