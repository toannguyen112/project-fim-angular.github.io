import { element } from "protractor";
import { Component, OnInit, Input } from "@angular/core";
import { TransformDataService } from "src/app/services/transformData.service";

@Component({
  selector: "app-lich-chieu",
  templateUrl: "./lich-chieu.component.html",
  styleUrls: ["./lich-chieu.component.scss"]
})
export class LichChieuComponent implements OnInit {
  public heThong: any[] = [];
  public cumRapChieu: any[];
  public lichChieuPhim: any[] = [];
  constructor(private transformData: TransformDataService) {}

  ngOnInit() {
    this.transformData.asData.subscribe(res => {
      this.heThong = res;
      console.log(this.heThong);
    });
  }
  selectRap(e) {
    console.log(e);
    this.cumRapChieu = e;
    for (let item of this.cumRapChieu) {
      this.lichChieuPhim = item.lichChieuPhim;
    }
  }
}
