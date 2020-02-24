import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TrangChuModule } from "./trang-chu/trang-chu.module";
import { DetailPageModule } from "./detail-page/detail-page.module";
import { DetailCinemaPageModule } from "./detail-cinema-page/detail-cinema-page.module";
import { CheckoutModule } from "./checkout/checkout.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TrangChuModule,
    DetailPageModule,
    DetailCinemaPageModule,
    CheckoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
