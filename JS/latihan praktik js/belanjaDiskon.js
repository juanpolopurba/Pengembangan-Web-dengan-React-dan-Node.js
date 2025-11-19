let headSet = 225000;
let mouse = 150000;
let keyBoard = 350000;

let totalBelanja = headSet + mouse + keyBoard;



if(totalBelanja < 250000){
    diskon = 0
}
else if(totalBelanja >=250000 && totalBelanja <=499000){
    diskon = 0.05
}
else if(totalBelanja >=500000 && totalBelanja<=799000){
    diskon = 0.1
}
else {
    diskon = 0.15
}

let PotonganHarga = totalBelanja * diskon;
let totalSetelahDiskon = totalBelanja - PotonganHarga;

console.log ("Headset = Rp. ", headSet);
console.log ("Mouse = Rp. ", mouse);
console.log ("Keyboard = Rp. ", keyBoard);

console.log ("Total Belanja = Rp. ", totalBelanja);
console.log ("Diskon =  ", diskon);
console.log ("Total Setelah Diskon = Rp. ", totalSetelahDiskon);

let pembayaran = 800000
let kembalian = pembayaran - totalSetelahDiskon
console.log ("Pembayaran Rp. ",pembayaran);
console.log ("Kembalian Rp. ",kembalian);

