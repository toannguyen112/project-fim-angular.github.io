import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-detail-main-info-cinema",
  templateUrl: "./detail-main-info-cinema.component.html",
  styleUrls: ["./detail-main-info-cinema.component.scss"]
})
export class DetailMainInfoCinemaComponent implements OnInit {
  loai: string = "lichchieu";
  constructor() {}

  ngOnInit() {}

  chonLoai(loai: string) {
    this.loai = loai;
  }
}
