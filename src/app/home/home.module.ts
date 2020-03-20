import { SliderComponent } from "./trang-chu/slider/slider.component";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login/login.component";
import { RegisteredComponent } from "./registered/registered/registered.component";
import { DetailRoomComponent } from "./detail-room/detail-room/detail-room.component";
import { CheckoutComponent } from "./checkout/checkout/checkout.component";

import { CheckoutHeaderComponent } from "./checkout/checkout/checkout-header/checkout-header.component";
import { HomeLayoutComponent } from "./home-layout/home-layout.component";
import { HeaderComponent } from "./trang-chu/header/header.component";
import { LoaiPhimComponent } from "./trang-chu/loai-phim/loai-phim.component";
import { CinemaComponent } from "./trang-chu/cinema/cinema.component";
import { TintucComponent } from "./trang-chu/tintuc/tintuc.component";
import { FooterComponent } from "./trang-chu/footer/footer.component";

import { PhimDangChieuComponent } from "./trang-chu/phim-dang-chieu/phim-dang-chieu.component";
import { PhimSapChieuComponent } from "./trang-chu/phim-sap-chieu/phim-sap-chieu.component";
import { TrangChuComponent } from "./trang-chu/trang-chu.component";
import { RouterModule, Routes } from "@angular/router";
import { CinemaItemComponent } from "./trang-chu/cinema-item/cinema-item.component";
import { CinemaFilmItemComponent } from "./trang-chu/cinema-film-item/cinema-film-item.component";
import { KhuyenMaiComponent } from "./trang-chu/khuyen-mai/khuyen-mai.component";
import { ReviewComponent } from "./trang-chu/review/review.component";
import { DienAnhComponent } from "./trang-chu/dien-anh/dien-anh.component";
import { DanhGiaComponent } from "./detail-page/danh-gia/danh-gia.component";
import { ThongTinFilmComponent } from "./detail-page/thong-tin-film/thong-tin-film.component";
import { LichChieuComponent } from "./detail-page/lich-chieu/lich-chieu.component";
import { ItemPhimComponent } from "./trang-chu/item-phim/item-phim.component";
import { ItemTinTucComponent } from "./trang-chu/item-tin-tuc/item-tin-tuc.component";

import { DetailCinemaPageComponent } from "./detail-cinema-page/detail-cinema-page/detail-cinema-page.component";

import { DanhgiaCinemaComponent } from "./detail-cinema-page/detail-cinema-page/danhgia-cinema/danhgia-cinema.component";
import { LichchieuCinemaComponent } from "./detail-cinema-page/detail-cinema-page/lichchieu-cinema/lichchieu-cinema.component";
import { ThongtinCinemaComponent } from "./detail-cinema-page/detail-cinema-page/thongtin-cinema/thongtin-cinema.component";
import { DetailPageComponent } from "./detail-page/detail-page.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProfileAboutComponent } from "./profile/profile-about/profile-about.component";
import { ProfileHistoryComponent } from "./profile/profile-history/profile-history.component";
import { ProfileContactComponent } from "./profile/profile-contact/profile-contact.component";
import { ProfileHistoryItemComponent } from "./profile/profile-history-item/profile-history-item.component";
import { CinemaTheatersComponent } from "./trang-chu/cinema-theaters/cinema-theaters.component";
import { ItemPhimSapChieuComponent } from "./trang-chu/item-phim-sap-chieu/item-phim-sap-chieu.component";
import { HomeToolsComponent } from './trang-chu/home-tools/home-tools.component';

@NgModule({
  declarations: [
    TrangChuComponent,
    LoginComponent,
    RegisteredComponent,
    DetailRoomComponent,

    CheckoutComponent,
    DetailPageComponent,
    CheckoutHeaderComponent,
    DanhgiaCinemaComponent,
    ItemTinTucComponent,

    LichchieuCinemaComponent,
    ThongtinCinemaComponent,
    HomeLayoutComponent,
    HeaderComponent,
    SliderComponent,
    LoaiPhimComponent,
    CinemaComponent,
    TintucComponent,
    FooterComponent,

    PhimDangChieuComponent,
    PhimSapChieuComponent,
    CinemaItemComponent,
    CinemaFilmItemComponent,
    KhuyenMaiComponent,
    ReviewComponent,
    DienAnhComponent,
    DanhGiaComponent,
    ThongTinFilmComponent,
    LichChieuComponent,
    ItemPhimComponent,
    ItemTinTucComponent,
    DetailPageComponent,
    DetailCinemaPageComponent,
    ProfileComponent,
    ProfileAboutComponent,
    ProfileHistoryComponent,
    ProfileContactComponent,
    ProfileHistoryItemComponent,
    CinemaTheatersComponent,
    ItemPhimSapChieuComponent,
    HomeToolsComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    TrangChuComponent,
    LoginComponent,
    RegisteredComponent,
    DetailRoomComponent,

    CheckoutComponent,
    DetailPageComponent,
    CheckoutHeaderComponent,
    DanhgiaCinemaComponent,

    LichchieuCinemaComponent,
    ThongtinCinemaComponent,
    HomeLayoutComponent,
    HeaderComponent,
    SliderComponent,
    LoaiPhimComponent,
    CinemaComponent,
    TintucComponent,
    FooterComponent,

    PhimDangChieuComponent,
    PhimSapChieuComponent,
    CinemaItemComponent,
    CinemaFilmItemComponent,
    KhuyenMaiComponent,
    ReviewComponent,
    DienAnhComponent,
    DanhGiaComponent,
    ThongTinFilmComponent,
    LichChieuComponent,
    ItemPhimComponent,
    ItemTinTucComponent,
    DetailPageComponent,
    DetailCinemaPageComponent
  ]
})
export class HomeModule {}
