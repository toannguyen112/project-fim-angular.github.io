import { FilmService } from "./../../services/film.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Film } from "src/app/models/film";
import { Subscription } from "rxjs";

@Component({
  selector: "app-trang-chu",
  templateUrl: "./trang-chu.component.html",
  styleUrls: ["./trang-chu.component.scss"]
})
export class TrangChuComponent implements OnInit, OnDestroy {
  constructor(private filmService: FilmService) {}
  public sub = new Subscription();
  public danhSachPhim: Film[] = [];
  public danhSachPhimDangChieu: Film[] = [];
  public danhSachPhimSapChieu: Film[] = [];

  ngOnInit() {
    this.sub = this.filmService.getListFilms().subscribe(res => {
      this.danhSachPhim = res;
      for (let i = 0; i < res.length; i++) {
        if (i < 10) {
          this.danhSachPhimDangChieu.push(res[i]);
        } else {
          this.danhSachPhimSapChieu.push(res[i]);
        }
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
