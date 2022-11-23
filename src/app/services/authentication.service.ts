import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private alertController: AlertController
  ) {}

  apiURL() {
    return 'http://localhost/api/';
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  public postMethod(data: any, link: any): Observable<any> {
    return this.http.post(this.apiURL() + link, data);
  }

  public getData(key: string) {
    return localStorage.getItem(key);
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public async message(message: string) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  logOut() {
    this.removeData('token');
  }
}
