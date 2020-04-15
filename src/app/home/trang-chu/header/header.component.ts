import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import "lodash";
import * as _ from "lodash";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Output("emitStatus") emitStatus = new EventEmitter();
  public loGin: boolean = false;
  public credentials: any;
  public showBarMenu: boolean = false;
  constructor(private userService: UserService, private _route: Router) {}

  ngOnInit() {
    this.credentials = this.userService.credentials;
    this.userService.credentialEmitter.subscribe((newCredentials) => {
      this.credentials = newCredentials;
    });
  }

  login(e) {
    this.loGin = e;
    this.emitStatus.emit(this.loGin);
  }
  dangXuat() {
    localStorage.removeItem("credentials");
    this.credentials = null;
    this.userService.setNoCredentials(null);
    Swal.fire({
      title: "Đăng xuất thành công",
      icon: "success",
    });
    this._route.navigate([""]);
  }
  showBar() {
    this.showBarMenu = true;
  }
}
