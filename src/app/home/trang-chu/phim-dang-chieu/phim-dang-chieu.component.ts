import { Film } from "src/app/models/film";
import { Component, OnInit, AfterViewInit, Input } from "@angular/core";
import $ from "jquery";
import { FilmService } from "src/app/services/film.service";
declare var $: any;

@Component({
  selector: "app-phim-dang-chieu",
  templateUrl: "./phim-dang-chieu.component.html",
  styleUrls: ["./phim-dang-chieu.component.scss"]
})
export class PhimDangChieuComponent implements OnInit, AfterViewInit {
  @Input("danhSachPhimDangChieu") danhSachPhimDangChieu: any[] = [];
  public movieList: Film[] = [];
  constructor(private filmService: FilmService) {}

  ngOnInit() {
    this.movieList = this.filmService.movieList;
    this.filmService.emitterMovieList.subscribe(res => {
      this.movieList = res;
      
    });


    
  }
  ngAfterViewInit() {
    
  }
}
