import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FilmService } from "src/app/services/film.service";

@Component({
  selector: "app-home-tools",
  templateUrl: "./home-tools.component.html",
  styleUrls: ["./home-tools.component.scss"],
})
export class HomeToolsComponent implements OnInit {
  public DanhSachPhim: any[] = [];
  public dsRap: any[] = [
    "CGV Vincom Đà Nẵng",
    "CGV Vĩnh Trung Plaza",
    "Glaxy - Đà Nẵng",
    "Lotte Cinema Đà Nẵng",
  ];
  public arrNgayXem: [
    {
      date: "Hôm nay";
      time: "2020-05-11";
    },
    {
      date: "Ngày mai";
      time: "2020-05-11";
    },
    {
      date: "Thứ tư";
      time: "2020-05-11";
    },
    {
      date: "Thứ năm";
      time: "2020-05-11";
    },
    {
      date: "Thứ sáu";
      time: "2020-05-11";
    },
    {
      date: "Thứ bảy";
      time: "2020-05-11";
    },
    {
      date: " Chủ nhật";
      time: "2020-05-11";
    }
  ];
  public showPhim: string = "";
  public showRap: string = "";
  public showNgayXem: string = "";
  public showSuatChieu: string = "";
  constructor(
    private _filmService: FilmService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.DanhSachPhim = this._filmService.movieList;
    this._filmService.emitterMovieList.subscribe((res) => {
      this.DanhSachPhim = res;
      console.log(this.DanhSachPhim);
    });
  }
  selectPhim(tenPhim) {
    console.log(tenPhim);
    this.showPhim = tenPhim;
  }
  selectRap(e) {
    this.showRap = e;
    // console.log(this.showRap);
  }
  selectNgayXem(e) {
    // console.log(e);
    this.showNgayXem = e;
  }
  selectSuatChieu(e) {
    this.showSuatChieu = e;
  }
  muaVe(e) {
    console.log(this.showPhim);
    // this.router([""])
  }
}
