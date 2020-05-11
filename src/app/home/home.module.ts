import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SliderComponent } from "./trang-chu/slider/slider.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login/login.component";
import { RegisteredComponent } from "./registered/registered/registered.component";
import { CheckoutComponent } from "./checkout/checkout/checkout.component";
import { CheckoutHeaderComponent } from "./checkout/checkout/checkout-header/checkout-header.component";
import { HomeLayoutComponent } from "./home-layout/home-layout.component";
import { HeaderComponent } from "./trang-chu/header/header.component";
import { LoaiPhimComponent } from "./trang-chu/loai-phim/loai-phim.component";
import { CinemaComponent } from "./trang-chu/cinema/cinema.component";
import { TintucComponent } from "./trang-chu/tintuc/tintuc.component";
import { FooterComponent } from "./trang-chu/footer/footer.component";
import { NgxPaginationModule } from "ngx-pagination";
import { PhimDangChieuComponent } from "./trang-chu/phim-dang-chieu/phim-dang-chieu.component";
import { PhimSapChieuComponent } from "./trang-chu/phim-sap-chieu/phim-sap-chieu.component";
import { TrangChuComponent } from "./trang-chu/trang-chu.component";
import { RouterModule, Routes } from "@angular/router";
import { CinemaItemComponent } from "./trang-chu/cinema-item/cinema-item.component";
import { CinemaFilmItemComponent } from "./trang-chu/cinema-film-item/cinema-film-item.component";
import { KhuyenMaiComponent } from "./trang-chu/khuyen-mai/khuyen-mai.component";
import { ReviewComponent } from "./trang-chu/review/review.component";
import { DienAnhComponent } from "./trang-chu/dien-anh/dien-anh.component";
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
import { HomeToolsComponent } from "./trang-chu/home-tools/home-tools.component";
import { MatInputModule } from "@angular/material/input";

import { CheckoutContentComponent } from "./checkout/checkout/checkout-content/checkout-content.component";
import { CheckoutOfficeDetailComponent } from "./checkout/checkout/checkout-office-detail/checkout-office-detail.component";
import { MatRadioModule } from "@angular/material/radio";
import { DetailMainComponent } from "./detail-page/detail-main/detail-main.component";
import { SeatComponent } from "./checkout/seat/seat.component";
import { LichChieuComponent } from "./detail-page/lich-chieu/lich-chieu.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingButtonItemPhimComponent } from "./trang-chu/loading-button-item-phim/loading-button-item-phim.component";
import { PipeModule } from "../pipe/pipe.module";
import { VeBanTruocComponent } from "./trang-chu/ve-ban-truoc/ve-ban-truoc.component";
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    TrangChuComponent,
    LoginComponent,
    RegisteredComponent,
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
    LichChieuComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    CinemaItemComponent,
    CinemaFilmItemComponent,
    KhuyenMaiComponent,
    ReviewComponent,
    DienAnhComponent,
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
    HomeToolsComponent,

    CheckoutContentComponent,
    CheckoutOfficeDetailComponent,
    DetailMainComponent,
    SeatComponent,
    LoadingButtonItemPhimComponent,
    VeBanTruocComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatRadioModule,
    NgxPaginationModule,
    FormsModule,
    NgxSpinnerModule,
    PipeModule,
    ReactiveFormsModule,
  ],
  exports: [
    TrangChuComponent,
    LoginComponent,
    LoadingComponent,
    RegisteredComponent,
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
    LichChieuComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    CinemaItemComponent,
    CinemaFilmItemComponent,
    KhuyenMaiComponent,
    ReviewComponent,
    DienAnhComponent,
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
    HomeToolsComponent,

    CheckoutContentComponent,
    CheckoutOfficeDetailComponent,
    DetailMainComponent,
    SeatComponent,
    LoadingButtonItemPhimComponent,
  ],
})
export class HomeModule {}
