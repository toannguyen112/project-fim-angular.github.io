import { Subscription } from "rxjs";
import { Film } from "src/app/models/film";
import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { FilmService } from "src/app/services/film.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-quanliphim-content",
  templateUrl: "./quanliphim-content.component.html",
  styleUrls: ["./quanliphim-content.component.scss"]
})
export class QuanliphimContentComponent implements OnInit, OnDestroy {
  public movieList: Film[] = [];
  public newMovieList: any;
  public sub: Subscription;
  public maPhim: any;
  constructor(private _filmService: FilmService) {}

  ngOnInit() {
    this.movieList = this._filmService.movieList;
    this._filmService.emitterMovieList.subscribe(res => {
      this.movieList = res;
    });

    this.sub = this._filmService.getListFilms().subscribe(
      res => {
        this._filmService.setDanhSachPhim(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteFilm(phim) {
    console.log(phim.maPhim);
    this.maPhim = phim.maPhim;

    this._filmService.DeleteFilm(this.maPhim).subscribe(
      res => {
        console.log(res.data);
      },
      err => {
        console.log(err);
        let newArray = this.movieList.filter(
          item => item.maPhim != this.maPhim
        );
        this.movieList = newArray;
        Swal.fire({
          icon: "success",
          title: "",
          text: "Xóa thành công"
        });
      }
    );
  }

  addPhim(film) {
    Swal.fire({
      icon: "success",
      title: "",
      text: "Thêm thành công"
    });
    this.movieList.push(film);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
