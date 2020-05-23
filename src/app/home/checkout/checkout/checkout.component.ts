import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { PhongveService } from "src/app/services/phongve.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  public thongTinPhim: any;
  public sub: Subscription;
  public maLichChieu;
  public status: boolean = true;
  public isShow = false;
  constructor(
    private phongVeService: PhongveService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.maLichChieu = params.maLichChieu;
      this.sub = this.phongVeService

        .chiTietPhongVe(params.maLichChieu)
        .subscribe((res) => {
          this.thongTinPhim = res.thongTinPhim;
        });
    });

    this.spinner.show();
    setTimeout(() => {
      this.isShow = true;
      this.spinner.hide();
    }, 0);
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
