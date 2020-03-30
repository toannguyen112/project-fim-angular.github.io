import { Subscription } from "rxjs";
import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { RapService } from "src/app/services/rap.service";
import { TransformDataService } from "src/app/services/transformData.service";

@Component({
  selector: "app-cinema",
  templateUrl: "./cinema.component.html",
  styleUrls: ["./cinema.component.scss"]
})
export class CinemaComponent implements OnInit, OnDestroy {
  public sub: Subscription;
  public heThongRap: any[] = [];
  public listCumRap: any[] = [];
  public listPhim: any[] = [];
  public lstLichChieuTheoPhim: any[] = [];
  public valueDefaut = "BHDStar";
  public lichChieuDefaut: any;
  public maCumRapActive: any;
  constructor(private rapService: RapService) {}

  ngOnInit() {
    this.sub = this.rapService.layThongTinHeThongRap().subscribe(res => {
      this.heThongRap = res;
    });
    this.selectCinema(this.valueDefaut);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  selectCinema(value) {
    this.valueDefaut = value;
    this.rapService
      .layLichChieuTheoMaHeThongRap(this.valueDefaut)
      .subscribe(res => {
        for (let rap of res) {
          this.listCumRap = rap.lstCumRap;
        }
      });
  }

  onListLichChieu(value) {
    this.maCumRapActive = value.maCumRap;
    console.log(this.maCumRapActive);

    this.listPhim = value.danhSachPhim;
  }
}
