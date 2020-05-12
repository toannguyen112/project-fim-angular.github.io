import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.scss']
})
export class ProfileAboutComponent implements OnInit {
  @Input("thongTinTaiKhoan") thongTinTaiKhoan  ; 
  public capNhatAvarta : string ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXT-MvunybNC8rfKP3k9axIiv4G8HRZIskEF5RZIRilJCvHnP-&usqp=CAU";
  constructor() { }
  public currentInput ;
  ngOnInit() {
    console.log(this.thongTinTaiKhoan);
    
  }

  
}
