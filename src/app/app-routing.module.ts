import { DetailComponent } from "./detail-page/detail/detail.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TrangChuComponent } from "./trang-chu/trang-chu/trang-chu.component";

const routes: Routes = [
  {
    path: "",
    component: TrangChuComponent
  },
  { path: "detail", component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
