import { DangKi } from "src/app/models/dangKi";
import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-registered",
  templateUrl: "./registered.component.html",
  styleUrls: ["./registered.component.scss"]
})
export class RegisteredComponent implements OnInit {
  public sub: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {}
 
  dangKi(data: DangKi) {
    console.log(data);
    this.userService.dangKi(data).subscribe(
      res => {
        console.log(res);
        alert("Đăng kí thành công");
      },
      error => {
        console.log(error);
      }
    );
  }
}
