import { Component, OnInit, OnDestroy } from "@angular/core";
import { FilmService } from "src/app/services/film.service";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail-page",
  templateUrl: "./detail-page.component.html",
  styleUrls: ["./detail-page.component.scss"]
})
export class DetailPageComponent implements OnInit, OnDestroy {
  public loai: string = "lichchieu";
  public detailPhim: any;
  public phim: any;
  public lichChieu: any[] = [];

  public sub = new Subscription();
  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.phim = params.id;
      this.filmService.getFilmDetail(this.phim).subscribe(res => {
        this.detailPhim = res;
        this.lichChieu = res.lichChieu;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  chonLoai(loai: string) {
    this.loai = loai;
  }
}
