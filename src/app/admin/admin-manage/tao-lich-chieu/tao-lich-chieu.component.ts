import { Subscription } from "rxjs";
import { Component, OnInit, Input } from "@angular/core";
import { PhongveService } from "src/app/services/phongve.service";

@Component({
  selector: "app-tao-lich-chieu",
  templateUrl: "./tao-lich-chieu.component.html",
  styleUrls: ["./tao-lich-chieu.component.scss"],
})
export class TaoLichChieuComponent implements OnInit {
  @Input("phim") phim: any;
  public display: boolean = false;
  public sub: Subscription;

  constructor(private phongveService: PhongveService) {}

  ngOnInit() {}
  taoLichChieu(data) {
    const licChieu = {
      ...data,
      maRap: 0,
      maPhim: this.phim.maPhim,
    };
    console.log(licChieu);

    this.sub = this.phongveService.taoLichChieu(licChieu).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  show() {
    this.display = true;
  }
  close() {
    this.display = false;
  }
}
