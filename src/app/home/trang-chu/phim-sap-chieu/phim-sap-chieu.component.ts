import { Component, OnInit, AfterViewInit, Input } from "@angular/core";

import { Film } from "src/app/models/film";
import { FilmService } from "src/app/services/film.service";
declare var $: any;
@Component({
  selector: "app-phim-sap-chieu",
  templateUrl: "./phim-sap-chieu.component.html",
  styleUrls: ["./phim-sap-chieu.component.scss"]
})
export class PhimSapChieuComponent implements OnInit {
  constructor(private filmService: FilmService) {}
  public movieList: Film[] = [];
  public list: Film[] = [];
  ngOnInit() {
    // this.movieList = this.filmService.movieList;
    // for (let i = 10; i < 18; i++) {
    //   this.list.push(this.movieList[i]);
    // }
    this.movieList = this.filmService.movieSapChieu;
    this.filmService.emiiterdanhSachPhimSapChieu.subscribe(res => {
      this.movieList = res;
    });
  }
}
