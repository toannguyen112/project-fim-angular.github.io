import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';



@NgModule({
  declarations: [AdminLayoutComponent, AdminManageComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }
