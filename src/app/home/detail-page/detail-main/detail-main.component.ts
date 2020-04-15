import { OnDestroy, Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-detail-main",
  templateUrl: "./detail-main.component.html",
  styleUrls: ["./detail-main.component.scss"],
})
export class DetailMainComponent implements OnInit {
  @Input() chiTietPhim;

  constructor() {}
  public detailPhim: any;
  public maPhim: any;
  public isShowtrailer = false;
  public phimDangChieu: any = [
    {
      hinhAnh:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS43z9vXcT-_76gWr6fEBov_QIHCRU_g0g0BfsxNksvKmyUOCUd",
      tenPhim: "FAST & FURIOUS",
    },
    {
      hinhAnh:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShmjG-5IKs9xoj8F1wDtRsHA_YrVx0NwiVqxuq8LW-104ADcOe",
      tenPhim: "PAKER",
    },
    {
      hinhAnh:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS43z9vXcT-_76gWr6fEBov_QIHCRU_g0g0BfsxNksvKmyUOCUd",
      tenPhim: "FAST & FURIOUS",
    },
  ];

  showTrailer() {
    this.isShowtrailer = true;
  }
  closeTrailer() {
    this.isShowtrailer = false;
  }
  ngOnInit() {}
}
