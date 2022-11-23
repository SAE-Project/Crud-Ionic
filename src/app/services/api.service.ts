import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    public http: HttpClient,
    public alertController: AlertController
  ) {}

  apiURL() {
    return 'http://localhost/api/mahasiswa';
  }

  //Lihat semua data mahasiswa
  public getAllData(link: any): Observable<any> {
    return this.http.get(this.apiURL() + link);
  }
  //Membuat data mahasiswa
  public addMahasiswa(data: any): Observable<any> {
    return this.http.post(this.apiURL() + '/tambah.php', data);
  }

  //Lihat data mahasiswa berdasarkan id
  public getDataById(data: any, link: any): Observable<any> {
    return this.http.get(this.apiURL() + data, link);
  }

  //Tambah data mahasiswa
  public postMethod(data: any, link: any): Observable<any> {
    return this.http.post(this.apiURL() + link, data);
  }

  //Ubah data mahasiswa
  public putMethod(data: any, link: any): Observable<any> {
    return this.http.put(this.apiURL() + link, data);
  }

  //Hapus data mahasiswa
  public deleteMethod(data: any, link: any): Observable<any> {
    return this.http.delete(this.apiURL() + link, data);
  }
  public message(message: string) {
    const alert = this.alertController.create({
      message: message,
      buttons: ['OK'],
    });

    alert.then((alert) => {
      alert.present();
    });
  }
}
