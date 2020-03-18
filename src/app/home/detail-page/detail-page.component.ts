import { Film } from "./../../models/film";
import { Component, OnInit } from "@angular/core";
import { FilmService } from "src/app/services/film.service";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail-page",
  templateUrl: "./detail-page.component.html",
  styleUrls: ["./detail-page.component.scss"]
})
export class DetailPageComponent implements OnInit {
  public loai: string = "lichchieu";
  public detailPhim: Film;
  public film: any;
  public sub = new Subscription();
  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(maPhim => {
      this.film = maPhim;
      this.filmService.getFilmDetail(this.film).subscribe(
        (res)=>{
          console.log(res);
          
        }
      )
    });
  }

  chonLoai(loai: string) {
    this.loai = loai;
  }
}
