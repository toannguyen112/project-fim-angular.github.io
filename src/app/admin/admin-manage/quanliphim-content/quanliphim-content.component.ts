import { Subscription } from "rxjs";
import { Film } from "src/app/models/film";
import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { FilmService } from "src/app/services/film.service";

@Component({
  selector: "app-quanliphim-content",
  templateUrl: "./quanliphim-content.component.html",
  styleUrls: ["./quanliphim-content.component.scss"]
})
export class QuanliphimContentComponent implements OnInit, OnDestroy {
  public movieList: Film[] = [];
  public sub: Subscription;
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
    this._filmService.DeleteFilm(phim.maPhim).subscribe(
      res => {
        console.log(res);
        console.log("xoa thanh cong");
      },
      err => {
        console.log(err);
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
