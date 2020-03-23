import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
 
  public user: any;
  constructor(private userService: UserService) {}

  ngOnInit() {}
  dangNhap(user) {
    console.log(user);
    this.userService.dangNhap(user).subscribe(
      res => {
        console.log("dang nhap thanh cong");

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
