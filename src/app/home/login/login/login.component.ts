import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
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
  dangNhap(user) {
    this.userService.dangNhap(user).subscribe(
      (res) => {
        if (typeof res == "object") {
          localStorage.setItem("credentials", JSON.stringify(res));
          this.userService.setCredentials(res);
          Swal.fire({
            text: "Đăng nhập thành công",
            timer: 2000,
            icon: "success",
          });
        } else {
          alert("vui long nhap lai");
        }
      },
      (err) => {
        Swal.fire({
          text: "Tài khoản hoặc mật khẩu không đúng",
          timer: 2000,
          icon: "warning",
        });
      }
    );
  }
}
