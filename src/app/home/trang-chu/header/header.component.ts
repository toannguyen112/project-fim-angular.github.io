import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { TransformDataService } from "src/app/services/transformData.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input("user") user: object = {};
  public loGin: boolean = false;

  @Output("emitStatus") emitStatus = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  login(e) {
    this.loGin = e;
    this.emitStatus.emit(this.loGin);
  }
  dangXuat() {
    localStorage.removeItem("user");
    console.log("dang xuat");
    this.user = {}
    console.log(this.user);
  }
}
