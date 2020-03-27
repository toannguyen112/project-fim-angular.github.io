import { Film } from "src/app/models/film";
import { Component, OnInit, Input } from "@angular/core";

import { FilmService } from "src/app/services/film.service";
declare var $: any;

@Component({
  selector: "app-phim-dang-chieu",
  templateUrl: "./phim-dang-chieu.component.html",
  styleUrls: ["./phim-dang-chieu.component.scss"]
})
export class PhimDangChieuComponent implements OnInit {
  public movieList: Film[] = [];
  public list: Film[] = [];
  constructor(private filmService: FilmService) {}

  ngOnInit() {
    
    
    // this.movieList = this.filmService.movieList;
    // this.filmService.emitterMovieList.subscribe((res)=>{
    //   this.movieList = res
    // })
    this.movieList = this.filmService.movieDangChieu
    this.filmService.emitterdanSachPhimDangChieu.subscribe((res)=>{
      this.movieList = res
      
    })
 
  }
}
