import { Component, OnInit, Input } from "@angular/core";
import { Film } from "src/app/models/film";

@Component({
  selector: "app-loai-phim",
  templateUrl: "./loai-phim.component.html",
  styleUrls: ["./loai-phim.component.scss"]
})
export class LoaiPhimComponent implements OnInit {
  @Input() phim: Film[] = [];
  dangChieuStatus: boolean = true;

  constructor() {}

  ngOnInit() {
    console.log(this.phim);
  }

  hienPhimDangChieu() {
    this.dangChieuStatus = true;
  }
  hienPhimSapChieu() {
    this.dangChieuStatus = false;
  }
}
