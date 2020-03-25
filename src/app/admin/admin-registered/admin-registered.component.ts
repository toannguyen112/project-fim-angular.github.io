import { Subscription } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-registered",
  templateUrl: "./admin-registered.component.html",
  styleUrls: ["./admin-registered.component.scss"]
})
export class AdminRegisteredComponent implements OnInit {
  public sub: Subscription;

  constructor(private _userService: UserService, private _route: Router) {}

  ngOnInit() {}
  dangNhap(user) {
    console.log(user);
    this.sub = this._userService.dangNhap(user).subscribe(res => {
      if (typeof res == "object") {
        localStorage.setItem("admin", JSON.stringify(res));
        this._userService.setCredentialsAdmin(res);
      } else {
        alert("vui long nhap lai");
      }
      this._route.navigate(["admin/manage"]);
    });
  }
}
