import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import "lodash";
import * as _ from "lodash";
import { UserService } from "src/app/services/user.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
 
  @Output("emitStatus") emitStatus = new EventEmitter();
  public loGin: boolean = false;
  public credentials: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
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
    console.log("dang xuat");
    localStorage.removeItem("credentials");
    this.credentials = null;
  }
}
