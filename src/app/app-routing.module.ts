import { AdminManageComponent } from "./admin/admin-manage/admin-manage.component";
import { CheckoutComponent } from "./home/checkout/checkout/checkout.component";

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./home/login/login/login.component";
import { RegisteredComponent } from "./home/registered/registered/registered.component";
import { TrangChuComponent } from "./home/trang-chu/trang-chu.component";
import { DetailCinemaPageComponent } from "./home/detail-cinema-page/detail-cinema-page/detail-cinema-page.component";
import { DetailPageComponent } from "./home/detail-page/detail-page.component";
import { ProfileComponent } from "./home/profile/profile.component";
import { HomeLayoutComponent } from "./home/home-layout/home-layout.component";
import { AuthGuard } from "./auth.guard";
import { AdminRegisteredComponent } from "./admin/admin-registered/admin-registered.component";
import { AdminLayoutComponent } from "./admin/admin-layout/admin-layout.component";
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: TrangChuComponent
      },
      { path: "detail/:id", component: DetailPageComponent },
      {
        path: "cinema/:id",
        component: DetailCinemaPageComponent
      },
      {
        path: "checkout/:maLichChieu",
        component: CheckoutComponent
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
        path: "profile",
        component: ProfileComponent,
        canActivate: [AuthGuard]
      }
    ]
  },

  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      { path: "admin", component: AdminRegisteredComponent },
      {
        path: "manage",
        component: AdminManageComponent
        , canActivate :[AdminGuard]
      },
      {
        path: "registered",
        component: AdminRegisteredComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
