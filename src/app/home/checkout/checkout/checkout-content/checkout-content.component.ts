import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TransformDataService } from "src/app/services/transformData.service";

@Component({
  selector: "app-checkout-content",
  templateUrl: "./checkout-content.component.html",
  styleUrls: ["./checkout-content.component.scss"],
})
export class CheckoutContentComponent implements OnInit {
  @Input("thongTinPhim") thongTinPhim;
  @Output("emitNavigate") emitNavigate = new EventEmitter();
  @Output("emitterTotalPrice") emitterTotalPrice = new EventEmitter();
  public initVeVip2D: number = 0;
  public initVeThuong: number = 0;
  public initGheDoi2D: number = 0;
  public priceGheDoi2D: number = 0;
  public priceVeVip2D: number = 0;
  public priceVeThuong2D: number = 0;
  public url: string = "";
  public priceTicketVip2D: number = 60000;
  public priceTiketGheThuong2D: number = 80000;
  public priceTiketGheDoi: number = 120000;
  public total: number = 0;

  public isLoading: boolean = false;
  constructor(private _transformData: TransformDataService) {}

  ngOnInit() {
    console.log(this.thongTinPhim);
  }
  
  chonGhe(value) {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.total =
        this.priceGheDoi2D + this.priceVeVip2D + this.priceVeThuong2D;
      this._transformData.transformData(this.total);
      this.emitNavigate.emit(value);
    }, 3000);
  }

  // ve vip
  gheVip2DTang() {
    this.initVeVip2D++;
    this.priceVeVip2D = this.priceTicketVip2D * this.initVeVip2D;
  }
  gheVip2DGiam() {
    if (this.initVeVip2D > 0) {
      this.initVeVip2D -= 1;
      this.priceVeVip2D = this.priceTicketVip2D * this.initVeVip2D;
    }
  }
  //  ve thuong
  tangVeThuong() {
    this.initVeThuong++;
    this.priceVeThuong2D = this.priceTiketGheThuong2D * this.initVeThuong;
  }
  giamVeThuong() {
    if (this.initVeThuong > 0) {
      this.initVeThuong -= 1;
      this.priceVeThuong2D = this.priceTiketGheThuong2D * this.initVeThuong;
    }
  }

  // ghe doi
  tangGheDoi() {
    this.initGheDoi2D++;
    this.priceGheDoi2D = this.priceTiketGheDoi * this.initGheDoi2D;
  }

  giamGheDoi() {
    if (this.initGheDoi2D > 0) {
      this.initGheDoi2D -= 1;
      this.priceGheDoi2D = this.priceTiketGheDoi * this.initGheDoi2D;
    }
  }
}
