import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public sub: Subscription;
  public user: any;
  constructor(private userService: UserService, private route: Router) {}

  ngOnInit() {}
  dangNhap(user) {
    this.userService.dangNhap(user).subscribe(
      res => {
        if (typeof res == "object") {
          localStorage.setItem("credentials", JSON.stringify(res));
          this.userService.setCredentials(res);
        } else {
          alert("vui long nhap lai");
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
