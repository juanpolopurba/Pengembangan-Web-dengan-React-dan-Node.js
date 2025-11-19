let daftarBelanja =[];
daftarBelanja.push("Beras","Minyak","Gula")
daftarBelanja.push("Telur","Sayur","Buah")

let index = daftarBelanja.indexOf("Minyak");

if (index !== -1) {
    daftarBelanja.splice(index, 1);

}

daftarBelanja.sort();
for (let i = 0; i< daftarBelanja.length; i++){
    console.log(`${i + 1}. ${daftarBelanja[i]}`);

}

