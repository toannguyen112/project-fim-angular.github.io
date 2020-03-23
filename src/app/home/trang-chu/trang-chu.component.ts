import { FilmService } from "./../../services/film.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Film } from "src/app/models/film";
import { Subscription } from "rxjs";
import { TransformDataService } from "src/app/services/transformData.service";

@Component({
  selector: "app-trang-chu",
  templateUrl: "./trang-chu.component.html",
  styleUrls: ["./trang-chu.component.scss"]
})
export class TrangChuComponent implements OnInit, OnDestroy {
  constructor(
    private filmService: FilmService,
    private transform: TransformDataService
  ) {}
  public sub = new Subscription();
  // public danhSachPhim: Film[] = [];
  // public danhSachPhimDangChieu: Film[] = [];
  // public danhSachPhimSapChieu: Film[] = [];
  public status: boolean;
  public movieList: Film[] = [];

  ngOnInit() {
    this.movieList = this.filmService.movieList;
    this.filmService.emitterMovieList.subscribe((newMovieList: Film[]) => {
      this.movieList = newMovieList;
      console.log(this.movieList);
    });
    this.sub = this.filmService.getListFilms().subscribe(res => {
      //gửi data lên service, lưu vào biến movieList
      this.filmService.setDanhSachPhim(res);
      // for (let i = 0; i < res.length; i++) {
      //   this.danhSachPhim.push(res[i]);

      //   if (i < 4) {
      //     this.danhSachPhimDangChieu.push(res[i]);
      //   } else {
      //     this.danhSachPhimSapChieu.push(res[i]);
      //   }
      // }
    });

    // this.transform.transDanhSachPhim(this.danhSachPhim);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  reciveStatus(value) {
    this.status = value;
  }
}
