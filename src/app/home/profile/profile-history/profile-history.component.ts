import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-history',
  templateUrl: './profile-history.component.html',
  styleUrls: ['./profile-history.component.scss']
})
export class ProfileHistoryComponent implements OnInit {
  @Input("thongTinTaiKhoan") thongTinTaiKhoan  ;
  public thongTinDatVe : []
  constructor() { }

  ngOnInit() {
   this.thongTinDatVe = this.thongTinTaiKhoan.thongTinDatVe
   console.log(this.thongTinDatVe);
   
    
  }

}
