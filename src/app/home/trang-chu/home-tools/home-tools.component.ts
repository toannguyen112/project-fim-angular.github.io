import { Component, OnInit } from "@angular/core";
import { TransformDataService } from "src/app/services/transformData.service";
import { FilmService } from "src/app/services/film.service";

@Component({
  selector: "app-home-tools",
  templateUrl: "./home-tools.component.html",
  styleUrls: ["./home-tools.component.scss"]
})
export class HomeToolsComponent implements OnInit {
  public DanhSachPhim: any[] = [];
  public dsRap: any[] = [
    {
      ten: "Rạp 1"
    },
    {
      ten: "Rạp 2"
    }
  ];
  public showPhim: string = "";
  public showRap: string = "";
  public showNgayXem: string = "";
  public showSuatChieu: string = "";
  constructor(private _filmService: FilmService) {}

  ngOnInit() {
    this.DanhSachPhim = this._filmService.movieList;
    this._filmService.emitterMovieList.subscribe(res => {
      this.DanhSachPhim = res;
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
  muaVe(tenPhim) {
    console.log(this.showPhim);
  }
}
