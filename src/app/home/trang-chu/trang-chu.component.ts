import { FilmService } from "./../../services/film.service";
import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { Film } from "src/app/models/film";
import { Subscription } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-trang-chu",
  templateUrl: "./trang-chu.component.html",
  styleUrls: ["./trang-chu.component.scss"],
})
export class TrangChuComponent implements OnInit, OnDestroy {
  constructor(
    private filmService: FilmService,
    private spinner: NgxSpinnerService
  ) {}
  public sub = new Subscription();

  public status: boolean;
  public movieList: Film[] = [];

  ngOnInit() {
    this.movieList = this.filmService.movieList;
    this.filmService.emitterMovieList.subscribe((newMovieList: Film[]) => {
      this.movieList = newMovieList;
    });
    this.sub = this.filmService.getListFilms().subscribe((res) => {
      this.filmService.setDanhSachPhim(res);
      //gửi data lên service
      this.luuDanhSachPhimDangChieu(res);
      this.luuDanhSachPhimSapChieu(res);
    });
  }

  luuDanhSachPhimDangChieu(ds) {
    let result = [];
    for (let i = 1; i < 9; i++) {
      result.push(ds[i]);
    }

    this.filmService.setDanhSachPhimSDangChieu(result);
  }

  luuDanhSachPhimSapChieu(ds) {
    let result = [];
    for (let i = 10; i < 18; i++) {
      result.push(ds[i]);
    }

    this.filmService.setDanhSachPhimSapChieu(result);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  reciveStatus(value) {
    this.status = value;
  }
}
