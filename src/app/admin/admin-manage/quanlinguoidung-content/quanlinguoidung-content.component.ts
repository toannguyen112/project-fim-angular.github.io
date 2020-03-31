import { Subscription } from "rxjs";
import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-quanlinguoidung-content",
  templateUrl: "./quanlinguoidung-content.component.html",
  styleUrls: ["./quanlinguoidung-content.component.scss"]
})
export class QuanlinguoidungContentComponent implements OnInit {
  constructor(private _userService: UserService) {}

  public sub: Subscription;
  public danhSachNguoDung: any[] = [];
  public searchText;

  ngOnInit() {
    this.sub = this._userService.layDanhSachNguoiDung().subscribe(
      res => {
        console.log(res);

        this.danhSachNguoDung = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  addUser(user) {
    console.log(user);
    this.danhSachNguoDung.push(user);
  }
  deleteUser(taiKhoan) {
    console.log(taiKhoan);
    this._userService.deleteUser(taiKhoan).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
