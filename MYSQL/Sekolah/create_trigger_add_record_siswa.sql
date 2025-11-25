use sekolah;

delimiter $$
create trigger trg_siswa_after_update
after update on siswa 
for each row
begin 
insert into log_siswa (aksi, nis, nama_lama, nama_baru, tgl)
values ('UPDATE', NEW.nis, OLD.nama, New.nama, now());
END $$
DELIMITER ;