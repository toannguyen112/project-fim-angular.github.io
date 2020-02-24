import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-detail-main-info",
  templateUrl: "./detail-main-info.component.html",
  styleUrls: ["./detail-main-info.component.scss"]
})
export class DetailMainInfoComponent implements OnInit {
  loai: string = "lichchieu";
  constructor() {}

  ngOnInit() {}

  chonLoai(loai: string) {
    this.loai = loai;
  }
}
