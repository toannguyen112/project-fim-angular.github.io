import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { HomeModule } from "./home/home.module";
import { AdminModule } from "./admin/admin.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from "./auth.guard";
import { AdminGuard } from "./admin.guard";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgxSpinnerModule,
    HomeModule,
    AdminModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard, AdminGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
