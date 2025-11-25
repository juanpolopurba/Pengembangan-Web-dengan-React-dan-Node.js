use sekolah;

create view vw_agama_siswa as
select siswa.nis as NIS,
siswa.nama as Nama_Siswa,
agama.nama as vw_agama_siswa
from siswa, agama
where siswa.kd_agama = agama.kode;

