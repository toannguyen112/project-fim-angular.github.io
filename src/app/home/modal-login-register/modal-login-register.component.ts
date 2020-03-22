import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-modal-login-register",
  templateUrl: "./modal-login-register.component.html",
  styleUrls: ["./modal-login-register.component.scss"]
})
export class ModalLoginRegisterComponent implements OnInit {
  @Output("emitUser") emitUser = new EventEmitter();
  public type: boolean = false;
  constructor() {}

  ngOnInit() {}
  selectType(value) {
    this.type = value;
  }
  reciveUser(user) {
    this.emitUser.emit(user);
  }
}
