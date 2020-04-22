import { Component, OnInit, Input } from "@angular/core";
import { RapService } from "src/app/services/rap.service";

@Component({
  selector: "app-lich-chieu",
  templateUrl: "./lich-chieu.component.html",
  styleUrls: ["./lich-chieu.component.scss"],
})
export class LichChieuComponent implements OnInit {
  public cumRapChieu: any[];
  public lichChieuPhim: any[] = [];
  public valueDefaut: string = "";
  public heThongRapChieu = [];
  constructor(private rap: RapService) {}

  ngOnInit() {
    this.heThongRapChieu = this.rap.HeThongRapChieu;
    this.rap.emitterHeThongRapChieu.subscribe((res) => {
      this.heThongRapChieu = res;
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
