import { Component, OnInit, AfterViewInit, Input } from "@angular/core";
import $ from "jquery";
import { Film } from "src/app/models/film";
import { FilmService } from "src/app/services/film.service";
declare var $: any;
@Component({
  selector: "app-phim-sap-chieu",
  templateUrl: "./phim-sap-chieu.component.html",
  styleUrls: ["./phim-sap-chieu.component.scss"]
})
export class PhimSapChieuComponent implements OnInit, AfterViewInit {
  constructor(private filmService: FilmService) {}
  public movieList: Film[] = [];
  @Input("danhSachPhimSapChieu") danhSachPhimSapChieu: Film[] = [];

  ngOnInit() {
    this.movieList = this.filmService.movieList;
    this.filmService.emitterMovieList.subscribe(res => {
      this.movieList = res;
      console.log(this.movieList);
    });
  }
  ngAfterViewInit() {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    });
  }
}
