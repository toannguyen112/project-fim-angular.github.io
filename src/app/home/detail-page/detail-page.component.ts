import { Component, OnInit, OnDestroy } from "@angular/core";
import { FilmService } from "src/app/services/film.service";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { RapService } from "src/app/services/rap.service";
import { TransformDataService } from "src/app/services/transformData.service";

@Component({
  selector: "app-detail-page",
  templateUrl: "./detail-page.component.html",
  styleUrls: ["./detail-page.component.scss"]
})
export class DetailPageComponent implements OnInit, OnDestroy {
  public loai: string = "lichchieu";
  public detailPhim: any;
  public maPhim: any;
  public heThongRapChieu: any[] = [];

  public sub = new Subscription();
  constructor(
    private route: ActivatedRoute,
    private rap: RapService,
    private transformData: TransformDataService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.maPhim = params.id;

      this.rap.layThongTinLichChieuPhim(this.maPhim).subscribe(res => {
        this.detailPhim = res;
        this.heThongRapChieu = this.detailPhim.heThongRapChieu;
        this.transformData.transformData(this.heThongRapChieu);
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
