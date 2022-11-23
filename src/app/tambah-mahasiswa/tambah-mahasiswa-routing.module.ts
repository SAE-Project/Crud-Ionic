import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahMahasiswaPage } from './tambah-mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: TambahMahasiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahMahasiswaPageRoutingModule {}
