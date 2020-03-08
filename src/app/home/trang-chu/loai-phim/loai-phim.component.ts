import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loai-phim",
  templateUrl: "./loai-phim.component.html",
  styleUrls: ["./loai-phim.component.scss"]
})
export class LoaiPhimComponent implements OnInit {
  dangChieuStatus: boolean = true;
  constructor() {}

  ngOnInit() {}

  hienPhimDangChieu() {
    console.log("phim dang chieu");

    this.dangChieuStatus = true;
  }
  hienPhimSapChieu() {
    console.log("phim sap chieu");

    this.dangChieuStatus = false;
  }
}
