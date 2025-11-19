const fs = require ('fs');

let data = fs.readFileSync('film.json', 'utf-8');
let obj =[];

if (data.trim() !== "") {
    obj = JSON.parse(data);
}

console.log(obj);
 
obj.push(
    {judulfilm: "Agak laen", tahunrilis: 2024, jenisfilm: "Horor, Komedi"},
    {judulfilm: "Habibie & Ainun ", tahunrilis: 2012, jenisfilm: "Drama, Romantis"},
);

console.log("Daftar Film");
for (let i =0; i<obj.length; i++){
    console.log(`${i + 1}, ${obj[i].judulfilm} - ${obj[i].tahunrilis}-(${obj[i].jenisfilm})`);
}

fs.writeFileSync('film.json', JSON.stringify(obj, null, 2),'utf-8');

console.log("Data Berhasil di tambahkan ke 'film.json' ")