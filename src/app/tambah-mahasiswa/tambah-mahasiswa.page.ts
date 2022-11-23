import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tambah-mahasiswa',
  templateUrl: './tambah-mahasiswa.page.html',
  styleUrls: ['./tambah-mahasiswa.page.scss'],
})
export class TambahMahasiswaPage implements OnInit {
  nama: any;
  NIM: any;
  alamat: any;
  constructor(private api: ApiService, private router: Router) {}
  ngOnInit() {}
  addMahasiswa(form: any) {
    const formMhs = {
      nama: this.nama,
      NIM: this.NIM,
      alamat: this.alamat,
    };
    console.log(formMhs);
    return this.api.addMahasiswa(formMhs).subscribe({
      next: () => {
        this.api.message('Berhasil tambah data');
        this.router.navigateByUrl('/home');
      },
    });
  }
}
