import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import $ from "jquery";
declare var $: any;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public sub: Subscription;
  public user: any;
  constructor(private userService: UserService, private route: Router) {}

  ngOnInit() {}
  login(user) {
    $("#modalDangNhap").modal("hide");
    this.userService.dangNhap(user).subscribe(
      (res) => {
        if (typeof res == "object") {
          localStorage.setItem("credentials", JSON.stringify(res));
          this.userService.setCredentials(res);

          this.noti("Đăng nhập thành công", "success");
        } else {
          alert("vui long nhap lai");
        }
      },
      (err) => {
        this.noti("Tài khoản hoặc mật khẩu chưa đúng", "warning");
      }
    );
  }
  // alert
  noti(title, icon) {
    Swal.fire({
      title: title,
      icon: icon,
    });
  }
}
