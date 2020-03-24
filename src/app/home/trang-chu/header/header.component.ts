import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import "lodash";
import * as _ from "lodash";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output("emitStatus") emitStatus = new EventEmitter();
  public loGin: boolean = false;
  public credentials: any;

  constructor(private userService: UserService, private _route: Router) {}

  ngOnInit() {
    console.log("header work");
    this.credentials = this.userService.credentials;
    this.userService.credentialEmitter.subscribe(newCredentials => {
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
    this._route.navigate([""]);
  }
}
