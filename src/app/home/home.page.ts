import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nama: any;
  token: any;
  dataMhs: any = [];
  constructor(
    private authService: AuthenticationService,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadToken();
    this.getDataMhs();
  }
  //ceksesi untuk mengambil nama user
  loadToken() {
    this.token = this.authService.getData('token');
    if (this.token != null) {
      this.nama = this.authService.getData('username');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  //membuat fungsi untuk mengambil data mahasiswa
  getDataMhs() {
    this.api
      .getAllData('/lihatMhs.php')
      .pipe()
      .subscribe((data) => {
        return (this.dataMhs = data);
      });
  }
  // getMhs(){
  //   this.api.
  // }
  //membuat fungsi logout
  logout() {
    this.authService.logOut();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
  tambahMhs() {
    this.router.navigateByUrl('/tambah-mahasiswa');
  }
}
