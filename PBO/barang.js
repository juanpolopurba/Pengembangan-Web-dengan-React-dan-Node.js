class Laptop {
  constructor(nama, jumlah, harga) {
    this.nama = nama;
    this.jumlah = jumlah;
    this.harga = harga;

    this.total = jumlah * harga;
  }

  cektotalHarga() {
    let diskon = 0;
    if (this.total >= 9000000) {
      diskon = 30;
    } else if (this.total >= 8000000) {
      diskon = 25;
    } else if (this.total >= 7000000) {
      diskon = 20;
    } else if (this.total >= 6000000) {
      diskon = 10;
    } else if (this.total >= 5000000) {
      diskon = 5;
    }
    console.log(`
        Nama : ${this.nama}
        Total : ${this.total};
        Diskon : ${diskon}%`);
  }
}

// class child

class Asus extends Laptop {
  constructor(nama, jumlah, harga) {
    super(nama, jumlah, harga);
  }
}

class Hp extends Laptop {
  constructor(nama, jumlah, harga) {
    super(nama, jumlah, harga);
  }
}

class Lenovo extends Laptop {
  constructor(nama, jumlah, harga) {
    super(nama, jumlah, harga);
  }
}

let laptop1 = new Asus("Asus", 5, 5000000);
laptop1.cektotalHarga();

let laptop2 = new Hp("Hp", -4, 2000000);
laptop2.cektotalHarga();

let laptop3 = new Asus("lenovo", 1, 3000000);
laptop3.cektotalHarga();
