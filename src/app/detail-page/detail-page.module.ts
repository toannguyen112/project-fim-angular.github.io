import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { DetailMainInfoComponent } from './detail-main-info/detail-main-info.component';
import { LichChieuComponent } from './lich-chieu/lich-chieu.component';
import { ThongTinFilmComponent } from './thong-tin-film/thong-tin-film.component';
import { DanhGiaComponent } from './danh-gia/danh-gia.component';
import { TrangChuModule } from '../trang-chu/trang-chu.module';



@NgModule({
  declarations: [DetailComponent, DetailMainInfoComponent, LichChieuComponent, ThongTinFilmComponent, DanhGiaComponent],
  imports: [
    CommonModule ,TrangChuModule
  ],
  exports : [DetailComponent ,DetailMainInfoComponent ,LichChieuComponent,ThongTinFilmComponent,DanhGiaComponent]
})
export class DetailPageModule { }
