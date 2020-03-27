import { Component, OnInit, Input } from "@angular/core";
import { Film } from "src/app/models/film";

@Component({
  selector: "app-loai-phim",
  templateUrl: "./loai-phim.component.html",
  styleUrls: ["./loai-phim.component.scss"]
})
export class LoaiPhimComponent implements OnInit {
  public dangChieuStatus: boolean = true;
  @Input("danhSachPhimDangChieu") danhSachPhimDangChieu: Film[] = [];
  @Input("danhSachPhimSapChieu") danhSachPhimSapChieu: Film[] = [];

  constructor() {}

  ngOnInit() {
   
    
  }

  hienPhimDangChieu() {
    this.dangChieuStatus = true;
  }
  hienPhimSapChieu() {
    this.dangChieuStatus = false;
  }
}
