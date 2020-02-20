import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { DienAnhComponent } from './dien-anh/dien-anh.component';
import { ReviewComponent } from './review/review.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { FormLienHeComponent } from './form-lien-he/form-lien-he.component';
import { ThongTinLienHeComponent } from './thong-tin-lien-he/thong-tin-lien-he.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { ItemTinTucComponent } from './item-tin-tuc/item-tin-tuc.component';
import { CinemaComponent } from './cinema/cinema.component';



@NgModule({
  declarations: [HeaderComponent, SliderComponent, LoaiPhimComponent, PhimDangChieuComponent, PhimSapChieuComponent, ItemPhimComponent, TintucComponent, DienAnhComponent, ReviewComponent, KhuyenMaiComponent, LienheComponent, FormLienHeComponent, ThongTinLienHeComponent, TrangChuComponent, ItemTinTucComponent, CinemaComponent],
  imports: [
    CommonModule
  ],
  exports :[TrangChuComponent]
  
})
export class TrangChuModule { }
