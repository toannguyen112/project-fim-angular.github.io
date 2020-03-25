import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-manage",
  templateUrl: "./admin-manage.component.html",
  styleUrls: ["./admin-manage.component.scss"]
})
export class AdminManageComponent implements OnInit {
  public show: boolean = false;
  public showDownArrow: boolean = false;
  public type: string = "quanLiPhim";
  public credentialsAdmin: any;
  constructor(private _userService: UserService, private _route: Router) {}

  ngOnInit() {
    this.credentialsAdmin = this._userService.credentialsAdmin;
    console.log(this.credentialsAdmin);

    this._userService.credentialsAdminEmitter.subscribe(res => {
      this.credentialsAdmin = res;
    });
  }

  showSideBar() {
    this.show = !this.show;
  }

  showArrow() {
    this.showDownArrow = !this.showDownArrow;
  }

  chosenType(value: string) {
    this.type = value;
  }
  dangXuat() {
    this._userService.setCredentials(null);
    localStorage.removeItem("admin");
    this._route.navigate(["/admin/registered"]);
  }
}
