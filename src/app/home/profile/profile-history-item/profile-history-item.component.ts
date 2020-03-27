import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-profile-history-item",
  templateUrl: "./profile-history-item.component.html",
  styleUrls: ["./profile-history-item.component.scss"]
})
export class ProfileHistoryItemComponent implements OnInit {
  @Input("thongTin") thongTin: any;
  constructor() {}

  ngOnInit() {
  
  }
}
