import { CheckoutComponent } from "./checkout/checkout/checkout.component";
import { DetailComponent } from "./detail-page/detail/detail.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TrangChuComponent } from "./trang-chu/trang-chu/trang-chu.component";
import { DetailCinemaComponent } from "./detail-cinema-page/detail-cinema/detail-cinema.component";

const routes: Routes = [
  {
    path: "",
    component: TrangChuComponent
  },
  { path: "detail", component: DetailComponent },
  {
    path: "cinema",
    component: DetailCinemaComponent
  },
  {
    path: "checkout",
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
