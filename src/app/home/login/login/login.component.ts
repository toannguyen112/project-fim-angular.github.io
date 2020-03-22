import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { TransformDataService } from "src/app/services/transformData.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  @Output("emitUser") emitUser = new EventEmitter()
  public user : any ;
  constructor(
    private userService: UserService,
   
  ) {}
  public user: any;
  ngOnInit() {}
  dangNhap(user) {
    console.log(user);
    this.userService.dangNhap(user).subscribe(
      res => {
        console.log("dang nhap thanh cong");

        if (typeof res == "object") {
          this.user = res;
          this.emitUser.emit(this.user)
          localStorage.setItem("user", JSON.stringify(res));
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
