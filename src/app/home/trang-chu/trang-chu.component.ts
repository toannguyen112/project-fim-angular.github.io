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
 
  public status: boolean;
  public movieList: Film[] = [];

  ngOnInit() {
   
    this.movieList = this.filmService.movieList;
    this.filmService.emitterMovieList.subscribe((newMovieList: Film[]) => {
      this.movieList = newMovieList;
    });
    this.sub = this.filmService.getListFilms().subscribe(res => {
      //gửi data lên service, lưu vào biến movieList
      this.filmService.setDanhSachPhim(res);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  reciveStatus(value) {
    this.status = value;
  }

  
}
