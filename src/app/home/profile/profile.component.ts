import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit, OnDestroy {
  public choosen: string = "about";
  public taiKhoan: any;
  public sub: Subscription;
  public thongTinTaiKhoan: any;
  constructor(private _userService: UserService) {}

  ngOnInit() {
    this.taiKhoan = JSON.parse(localStorage.getItem("credentials"));

    let user = {
      taiKhoan: this.taiKhoan.taiKhoan
    };

    this.sub = this._userService.layThongTinTaiKhoan(user).subscribe(
      res => {
       
        this.thongTinTaiKhoan = res;
        console.log(this.thongTinTaiKhoan);
        
      },
      err => {
        console.log(err);
      }
    );
  }

  choosenComponent(value) {
    this.choosen = value;
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
