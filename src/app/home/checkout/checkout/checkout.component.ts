import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { PhongveService } from "src/app/services/phongve.service";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"]
})
export class CheckoutComponent implements OnInit, OnDestroy {
  public thongTinPhim: any;
  public sub: Subscription;
  public status: boolean = true;
  constructor(
    private phongVeService: PhongveService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sub = this.phongVeService
        .chiTietPhongVe(params.maLichChieu)
        .subscribe(res => {
          this.thongTinPhim = res.thongTinPhim;
          console.log(res.thongTinPhim);
        });
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  changeStatus(value) {
    this.status = value;
  }
  recivceStatus(status) {
    console.log(status);
    this.status = status;
  }
}
