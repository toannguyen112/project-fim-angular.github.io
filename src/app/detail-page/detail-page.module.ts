import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { DetailMainInfoComponent } from './detail-main-info/detail-main-info.component';
import { LichChieuComponent } from './lich-chieu/lich-chieu.component';
import { ThongTinFilmComponent } from './thong-tin-film/thong-tin-film.component';
import { DanhGiaComponent } from './danh-gia/danh-gia.component';



@NgModule({
  declarations: [DetailComponent, DetailMainInfoComponent, LichChieuComponent, ThongTinFilmComponent, DanhGiaComponent],
  imports: [
    CommonModule
  ],
  exports : [DetailComponent ,DetailMainInfoComponent ,LichChieuComponent,ThongTinFilmComponent,DanhGiaComponent]
})
export class DetailPageModule { }
