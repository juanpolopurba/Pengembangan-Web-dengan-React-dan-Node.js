let nasiGOreng = 25000;
let mieGoreng = 22000;
let capcay = 32000;
let hargaTotal = nasiGOreng + mieGoreng +capcay;
let diskon = 0.10 * hargaTotal;
let hargaSetelahDiskon = hargaTotal - diskon;
let pembayaran = 100000;

console.log("Harga Nasi Goreng = Rp.",nasiGOreng);
console.log("Harga Mie Goreng = Rp.",mieGoreng);
console.log("Harga Capcay = Rp.",capcay);
console.log("Harga Total Rp.= ",hargaTotal);
console.log("Diskon = ",diskon )
console.log("Harga setelah diskon = Rp. ",hargaSetelahDiskon  );
console.log("Pembayaran = Rp. ",pembayaran );
console.log("Kembalian = Rp. ",pembayaran - hargaSetelahDiskon);


// function totalHarga(nasiGoreng,mieGoreng,capcay){
//     return nasiGOreng + mieGoreng+ capcay;
// }
// jumlah =