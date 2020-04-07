import { Component, OnInit, Input } from "@angular/core";
import { TransformDataService } from "src/app/services/transformData.service";
import { ActivatedRoute } from "@angular/router";
import { RapService } from "src/app/services/rap.service";
import { FilmService } from "src/app/services/film.service";

@Component({
  selector: "app-lich-chieu",
  templateUrl: "./lich-chieu.component.html",
  styleUrls: ["./lich-chieu.component.scss"],
})
export class LichChieuComponent implements OnInit {
  public cumRapChieu: any[];
  public lichChieuPhim: any[] = [];
  public valueDefaut: string = "";
  public heThongRapChieu;
  constructor(
    private route: ActivatedRoute,
    private rap: RapService,
    private filmService: FilmService
  ) {}

  ngOnInit() {
    console.log(this.rap.HeThongRapChieu);
    this.rap.emitterHeThongRapChieu.subscribe((res) => {
      this.heThongRapChieu = res;
      console.log(this.heThongRapChieu);
    });
  }
  selectRap(e, maHethongRap) {
    this.valueDefaut = maHethongRap;

    this.cumRapChieu = e;
    for (let item of this.cumRapChieu) {
      this.lichChieuPhim = item.lichChieuPhim;
    }
  }
}
