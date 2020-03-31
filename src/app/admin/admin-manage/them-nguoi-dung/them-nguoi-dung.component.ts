import { Subscription } from "rxjs";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { NgForm } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: "app-them-nguoi-dung",
  templateUrl: "./them-nguoi-dung.component.html",
  styleUrls: ["./them-nguoi-dung.component.scss"]
})
export class ThemNguoiDungComponent implements OnInit {
  public sub: Subscription;
  public user: any;
  @Output("emitterUser") emitterUser = new EventEmitter();
  constructor(private _userService: UserService) {}

  ngOnInit() {}
  addUser(user: NgForm) {
    const userForm = {
      ...user.form.value,
      maLoaiNguoiDung: "KhachHang",
      maNhom: "GP01"
    };
    console.log(userForm);

    this.sub = this._userService.addUser(userForm).subscribe(
      res => {
        this.user = res;
        this.emitterUser.emit(this.user);

        Swal.fire({
          title: "Thêm thành công",
          icon: "success"
        });
      },
      err => {
        console.log(err);
        Swal.fire({
          title: "Thêm thất bại",
          icon: "error"
        });
      }
    );
  }
}
