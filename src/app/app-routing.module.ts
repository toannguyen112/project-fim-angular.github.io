import { CheckoutComponent } from "./home/checkout/checkout/checkout.component";

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DetailRoomComponent } from "./home/detail-room/detail-room/detail-room.component";
import { LoginComponent } from "./home/login/login/login.component";
import { RegisteredComponent } from "./home/registered/registered/registered.component";
import { TrangChuComponent } from "./home/trang-chu/trang-chu.component";
import { DetailCinemaPageComponent } from "./home/detail-cinema-page/detail-cinema-page/detail-cinema-page.component";
import { DetailPageComponent } from "./home/detail-page/detail-page.component";
import { ProfileComponent } from './home/profile/profile.component';

const routes: Routes = [
  {
    path: "",
    component: TrangChuComponent
  },
  { path: "detail", component: DetailPageComponent },
  {
    path: "cinema",
    component: DetailCinemaPageComponent
  },
  {
    path: "checkout",
    component: CheckoutComponent
  },
  {
    path: "room",
    component: DetailRoomComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "registered",
    component: RegisteredComponent
  },
  {
    path :"profile" ,
    component : ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
