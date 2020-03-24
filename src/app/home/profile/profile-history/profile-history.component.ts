import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-history',
  templateUrl: './profile-history.component.html',
  styleUrls: ['./profile-history.component.scss']
})
export class ProfileHistoryComponent implements OnInit {
  @Input("thongTinTaiKhoan") thongTinTaiKhoan : any ;
  public lichSuDatVe : []
  constructor() { }

  ngOnInit() {
   this.lichSuDatVe = this.thongTinTaiKhoan.thongTinDatVe
   console.log(this.lichSuDatVe);
   
    
  }

}
