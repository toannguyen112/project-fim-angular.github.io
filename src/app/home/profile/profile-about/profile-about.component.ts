import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.scss']
})
export class ProfileAboutComponent implements OnInit {
  @Input("thongTinTaiKhoan") thongTinTaiKhoan : object = {} ; 
  constructor() { }

  ngOnInit() {
    console.log(this.thongTinTaiKhoan);
    
  }

}
