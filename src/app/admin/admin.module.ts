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
import { FormsModule } from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';
import { ThemPhimComponent } from './admin-manage/them-phim/them-phim.component';
import { TaoLichChieuComponent } from './admin-manage/tao-lich-chieu/tao-lich-chieu.component';
import { ThemNguoiDungComponent } from './admin-manage/them-nguoi-dung/them-nguoi-dung.component';
@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminManageComponent,
    QuanliphimContentComponent,
    QuanlinguoidungContentComponent,
    AdminRegisteredComponent,
    ThemPhimComponent,
    TaoLichChieuComponent,
    ThemNguoiDungComponent
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
    NgxPaginationModule
  ]
})
export class AdminModule {}
