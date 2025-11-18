let barang = [
       { namasepatu: "New Balance", harga: 390000},
       { namasepatu: "Nike Vomero 5", harga: 350000},
       { namasepatu: "Adidas Samba", harga: 180000},
       { namasepatu: "Onitsuka Tiger Mexico", harga: 420000}
    ]

    console.log("==== Rincian Belanja Sepatu ====");

    for (let i = 0; i < barang.length; i++){
        console.log(`${i + 1}. ${barang[i].namasepatu} - Rp ${barang[i].harga}}`)
    }

    let totalBelanja = 0;
    for (let i = 0; i< barang.length; i++) {
        totalBelanja += barang[i].harga;
    }
    console.log(`Total Belanja = Rp. ${totalBelanja}`);

    diskon = totalBelanja *0.15;
    console.log(`Diskon 15% = Rp ${diskon}`);

    let totalSetelahDiskon = totalBelanja - diskon;
    console.log(`Total Setelah Diskon: Rp ${totalSetelahDiskon}`);

    let pembayaran = 1200000;
    let kembalian = pembayaran - totalSetelahDiskon;

    console.log(`Pembayaran: Rp ${pembayaran}`);
    console.log(`Kembalian: Rp ${kembalian}`);