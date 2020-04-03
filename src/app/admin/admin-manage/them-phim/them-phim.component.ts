import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FilmService } from "src/app/services/film.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-them-phim",
  templateUrl: "./them-phim.component.html",
  styleUrls: ["./them-phim.component.scss"]
})
export class ThemPhimComponent implements OnInit {
  @Output("emitterFilm") emitterFilm = new EventEmitter();
  public sub: Subscription;
  public film: any;

  constructor(private _filmSercive: FilmService, private _http: HttpClient) {}
  ngOnInit() {}
  addFilm(data: NgForm) {
    const formThemPhim = {
      ...data.form.value,
      maNhom: "GP01",
      biDanh: "phim",
      danhGia: 0
    };
    console.log(formThemPhim);
    this._filmSercive.addFilm(formThemPhim).subscribe(
      res => {
        console.log(res);
        this.film = res;
        this.emitterFilm.emit(this.film);
        this._filmSercive.upLoadImg(formThemPhim.hinhAnh,formThemPhim.tenPhim).subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }
}
