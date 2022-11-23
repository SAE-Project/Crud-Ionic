import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password: any;
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  ngOnInit() {}
  prosesLogin(): void {
    if (this.username != null && this.password != null) {
      const data = {
        username: this.username,
        password: this.password,
      };
      this.authService.postMethod(data, 'proses_login.php').subscribe({
        next: (hasil) => {
          if (hasil.status_login == 'berhasil') {
            this.authService.saveData('token', hasil.token);
            this.authService.saveData('username', hasil.username);
            this.username = null;
            this.password = null;
            this.router.navigateByUrl('/home');
          } else {
            this.authService.message('Username dan Password Salah');
          }
        },
        error: (e) => {
          console.log(e);
          this.authService.message('Internet anda error');
        },
      });
    } else {
      this.authService.message('Username dan Password Tidak Boleh Kosong');
    }
  }
}
