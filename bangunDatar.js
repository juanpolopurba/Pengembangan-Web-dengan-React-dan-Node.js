console.log("MENGHITUNG LUAS DAN KELILING BANGUN DATAR");

console.log(">> Luas Bangun Datar <<");
let sisi = 8;
let panjang = 9
let lebar = 3
let jarijari = 6
let alas = 6
let tinggi = 4

const phi = Math.PI;

function luasPersegi(sisi){
    luas = sisi * sisi
    console.log("luas Persegi Dengan Sisi ",sisi ,"Adalah",luas);

}
luasPersegi(sisi)
function luasPersegi(sisi){
    luas = sisi * sisi
    console.log("luas Persegi Dengan Sisi ",sisi ,"Adalah",luas);
}
function luasPersegiPanjang(panjang,lebar){
    luas = panjang * lebar
    console.log("luas Persegi Panjang Dengan Panjang ",panjang ,"Dan Lebar",lebar, "Adalah",luas);
}
luasPersegiPanjang(panjang,lebar)

function luasLingkaran(jarijari){
    luas = phi * jarijari * jarijari;
    console.log("luas Lingkaran Dengan jari-jari ",jarijari ,"Adalah",luas);
}
luasLingkaran(jarijari)

function luasSegitiga(alas,tinggi){
    luas = 0.5 * alas * tinggi;
    console.log("luas Segitiga Dengan alas ",alas ,"Adalah",luas);
}
luasSegitiga(alas,tinggi)

console.log(">> Keliling Bangun Datar <<");


function kelilingPersegi(sisi){
    keliling = 4 * sisi;
    console.log("keliling Persegi Dengan sisi ",sisi ,"adalah",keliling);
    
}
kelilingPersegi(sisi)

function kelilingPersegiPanjang(panjang,lebar){
    keliling = 2 * panjang + 2 * lebar
    console.log("keliling Persegi Panjang Dengan Panjang ",panjang ,"Dan Lebar",lebar, "Adalah",keliling);
}
kelilingPersegiPanjang(panjang,lebar)

function kelilingLingkaran(jarijari){
    keliling = 2 * phi * jarijari ;
    console.log("keliling Lingkaran Dengan jari-jari ",jarijari ,"Adalah",keliling);
}
kelilingLingkaran(jarijari)

function kelilingSegitiga(alas){
    keliling = alas + alas + alas;
    console.log("keliling Segitiga Dengan alas ",alas ,"Adalah",keliling);
}
kelilingSegitiga(alas)