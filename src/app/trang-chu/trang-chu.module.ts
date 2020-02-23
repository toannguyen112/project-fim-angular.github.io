import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { SliderComponent } from "./slider/slider.component";
import { LoaiPhimComponent } from "./loai-phim/loai-phim.component";
import { PhimDangChieuComponent } from "./phim-dang-chieu/phim-dang-chieu.component";
import { PhimSapChieuComponent } from "./phim-sap-chieu/phim-sap-chieu.component";
import { ItemPhimComponent } from "./item-phim/item-phim.component";
import { TintucComponent } from "./tintuc/tintuc.component";
import { DienAnhComponent } from "./dien-anh/dien-anh.component";
import { ReviewComponent } from "./review/review.component";
import { KhuyenMaiComponent } from "./khuyen-mai/khuyen-mai.component";
import { TrangChuComponent } from "./trang-chu/trang-chu.component";
import { ItemTinTucComponent } from "./item-tin-tuc/item-tin-tuc.component";
import { CinemaComponent } from "./cinema/cinema.component";
import { CinemaItemComponent } from "./cinema-item/cinema-item.component";
import { CinemaFilmItemComponent } from "./cinema-film-item/cinema-film-item.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    TrangChuComponent,
    HeaderComponent,
    SliderComponent,
    LoaiPhimComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    ItemPhimComponent,
    TintucComponent,
    DienAnhComponent,
    ReviewComponent,
    KhuyenMaiComponent,
    TrangChuComponent,
    ItemTinTucComponent,
    CinemaComponent,
    CinemaItemComponent,
    CinemaFilmItemComponent,
    FooterComponent
  ],

  imports: [CommonModule],
  exports: [
    HeaderComponent,
    SliderComponent,
    LoaiPhimComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    ItemPhimComponent,
    TintucComponent,
    DienAnhComponent,
    ReviewComponent,
    KhuyenMaiComponent,
    TrangChuComponent,
    ItemTinTucComponent,
    CinemaComponent,
    CinemaItemComponent,
    CinemaFilmItemComponent,
    FooterComponent,
    TrangChuComponent
  ]
})
export class TrangChuModule {}
