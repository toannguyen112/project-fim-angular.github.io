import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailCinemaComponent } from "./detail-cinema/detail-cinema.component";
import { DanhgiaCinemaComponent } from './danhgia-cinema/danhgia-cinema.component';
import { LichchieuCinemaComponent } from './lichchieu-cinema/lichchieu-cinema.component';
import { ThongtinCinemaComponent } from './thongtin-cinema/thongtin-cinema.component';
import { DetailMainInfoCinemaComponent } from './detail-main-info-cinema/detail-main-info-cinema.component';
import { TrangChuModule } from '../trang-chu/trang-chu.module';

@NgModule({
  declarations: [DetailCinemaComponent, DanhgiaCinemaComponent, LichchieuCinemaComponent, ThongtinCinemaComponent, DetailMainInfoCinemaComponent],
  imports: [CommonModule ,TrangChuModule],
  exports: [DetailCinemaComponent, DanhgiaCinemaComponent, LichchieuCinemaComponent, ThongtinCinemaComponent, DetailMainInfoCinemaComponent]
})
export class DetailCinemaPageModule {}
