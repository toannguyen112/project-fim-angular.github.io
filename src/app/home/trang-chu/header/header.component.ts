import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public credentials: any;
  public showBarMenu: boolean = false;
  public type: boolean = false;
  constructor(private userService: UserService, private _route: Router) {}

  ngOnInit() {
    this.credentials = this.userService.credentials;
    this.userService.credentialEmitter.subscribe((newCredentials) => {
      this.credentials = newCredentials;
    });
  }

  dangXuat() {
    localStorage.removeItem("credentials");
    this.credentials = null;
    this.userService.setNoCredentials(null);
    Swal.fire({
      title: "Đăng xuất thành công",
      icon: "success",
      timer: 1000,
    });
    this._route.navigate([""]);
  }
  showBar() {
    this.showBarMenu = true;
  }
  closeShowBarMenu() {
    this.showBarMenu = false;
  }

  selectType(value) {
    this.type = value;
  }
}
