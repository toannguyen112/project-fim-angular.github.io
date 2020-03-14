import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-manage",
  templateUrl: "./admin-manage.component.html",
  styleUrls: ["./admin-manage.component.scss"]
})
export class AdminManageComponent implements OnInit {
  public show: boolean = false;
  public showDownArrow: boolean = false;
  public type: string = "quanLiPhim";

  constructor() {}

  ngOnInit() {}

  showSideBar() {
    this.show = !this.show;
  }

  showArrow() {
    this.showDownArrow = !this.showDownArrow;
  }

  chosenType(value: string) {
    this.type = value;
  }
}
