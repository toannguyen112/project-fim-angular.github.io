import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.scss']
})
export class ProfileAboutComponent implements OnInit {
  @Input("thongTinTaiKhoan") thongTinTaiKhoan : object = {} ; 
  public capNhatAvarta : string ="https://scontent.fsgn6-2.fna.fbcdn.net/v/t1.0-0/p160x160/49308610_106238597147928_3522069505675100160_n.jpg?_nc_cat=102&_nc_sid=7aed08&_nc_ohc=QzWJMvZ1ZwoAX-RKvUr&_nc_ht=scontent.fsgn6-2.fna&_nc_tp=6&oh=906e63d9464a59297130a8a77c4be99b&oe=5EA5010F";
  constructor() { }
  public currentInput ;
  ngOnInit() {
    console.log(this.thongTinTaiKhoan);
    
  }

  
}
