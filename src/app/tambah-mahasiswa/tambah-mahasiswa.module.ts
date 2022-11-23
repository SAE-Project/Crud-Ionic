import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahMahasiswaPageRoutingModule } from './tambah-mahasiswa-routing.module';

import { TambahMahasiswaPage } from './tambah-mahasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahMahasiswaPageRoutingModule,
  ],
  declarations: [TambahMahasiswaPage],
})
export class TambahMahasiswaPageModule {}
