import { Component, OnInit, OnDestroy } from "@angular/core";
import { FilmService } from "src/app/services/film.service";
import { Subscription } from "rxjs";
import { Film } from "src/app/models/film";

@Component({
  selector: "app-trang-chu",
  templateUrl: "./trang-chu.component.html",
  styleUrls: ["./trang-chu.component.scss"]
})
export class TrangChuComponent implements OnInit, OnDestroy {
  public danhSachPhim: Film[] = [];
  private subDanhSachPhim = new Subscription();

  constructor(private filmsService: FilmService) {}

  ngOnInit() {
    this.subDanhSachPhim = this.filmsService
      .getListFilms()
      .subscribe(result => {
        this.danhSachPhim = result;
      });
  }
  ngOnDestroy() {
    this.subDanhSachPhim.unsubscribe();
  }
}
