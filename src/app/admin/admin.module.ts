import { Ng2SearchPipeModule } from "ng2-search-filter";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminLayoutComponent } from "./admin-layout/admin-layout.component";
import { AdminManageComponent } from "./admin-manage/admin-manage.component";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material";
import { QuanliphimContentComponent } from "./admin-manage/quanliphim-content/quanliphim-content.component";
import { QuanlinguoidungContentComponent } from "./admin-manage/quanlinguoidung-content/quanlinguoidung-content.component";
import { MatButtonModule } from "@angular/material/button";
import { AdminRegisteredComponent } from "./admin-registered/admin-registered.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { ThemPhimComponent } from "./admin-manage/them-phim/them-phim.component";
import { TaoLichChieuComponent } from "./admin-manage/tao-lich-chieu/tao-lich-chieu.component";
import { ThemNguoiDungComponent } from "./admin-manage/them-nguoi-dung/them-nguoi-dung.component";
import { UpdatePhimComponent } from './admin-manage/update-phim/update-phim.component';
@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminManageComponent,
    QuanliphimContentComponent,
    QuanlinguoidungContentComponent,
    AdminRegisteredComponent,
    ThemPhimComponent,
    TaoLichChieuComponent,
    ThemNguoiDungComponent,
    UpdatePhimComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatButtonModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
  ],
  exports: [
    AdminLayoutComponent,
    AdminManageComponent,
    QuanliphimContentComponent,
    QuanlinguoidungContentComponent,
    AdminRegisteredComponent,
    ThemPhimComponent,
    TaoLichChieuComponent,
    ThemNguoiDungComponent,
  ],
})
export class AdminModule {}
