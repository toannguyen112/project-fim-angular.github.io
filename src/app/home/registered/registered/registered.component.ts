import { DangKi } from "src/app/models/dangKi";
import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-registered",
  templateUrl: "./registered.component.html",
  styleUrls: ["./registered.component.scss"]
})
export class RegisteredComponent implements OnInit {
  public sub: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {}

  dangKi(data: NgForm) {
    const user = {
      ...data.form.value,
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang"
    };

    this.userService.dangKi(user).subscribe(
      res => {
        alert("Đăng kí thành công");
      },
      error => {
        console.log(error);
      }
    );
  }
}
