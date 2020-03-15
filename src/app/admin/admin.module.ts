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
@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminManageComponent,
    QuanliphimContentComponent,
    QuanlinguoidungContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class AdminModule {}
