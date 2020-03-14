import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminLayoutComponent } from "./admin-layout/admin-layout.component";
import { AdminManageComponent } from "./admin-manage/admin-manage.component";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { QuanliphimContentComponent } from "./admin-manage/quanliphim-content/quanliphim-content.component";
import { QuanlinguoidungContentComponent } from "./admin-manage/quanlinguoidung-content/quanlinguoidung-content.component";
@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminManageComponent,
    QuanliphimContentComponent,
    QuanlinguoidungContentComponent,
    
  ],
  imports: [CommonModule, RouterModule, MatTableModule, MatInputModule,MatFormFieldModule,MatSelectModule]
})
export class AdminModule {}
