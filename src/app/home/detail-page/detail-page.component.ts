import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-detail-page",
  templateUrl: "./detail-page.component.html",
  styleUrls: ["./detail-page.component.scss"]
})
export class DetailPageComponent implements OnInit {
  public loai: string = "lichchieu";

  constructor() {}

  ngOnInit() {}

  chonLoai(loai: string) {
    this.loai = loai;
  }
}
