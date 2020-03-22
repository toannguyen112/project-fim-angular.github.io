import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-checkout-content",
  templateUrl: "./checkout-content.component.html",
  styleUrls: ["./checkout-content.component.scss"]
})
export class CheckoutContentComponent implements OnInit {
  @Input("thongTinPhim") thongTinPhim: any;
  @Output("emitNavigate") emitNavigate = new EventEmitter();
  public initVeVip2D: number = 0;
  public initVeThuong: number = 0;
  public initGheDoi2D: number = 0;
  public priceGheDoi2D: number = 0;
  public priceVeVip2D: number = 0;
  public priceVeThuong2D: number = 0;
  public priceTicket: number = 60000;

  constructor() {}

  ngOnInit() {}
  chonGhe(value) {
    this.emitNavigate.emit(value);
  }

  // ve vip
  gheVip2DTang() {
    this.initVeVip2D++;
    this.priceVeVip2D = this.priceTicket * this.initVeVip2D;
  }
  gheVip2DGiam() {
    if (this.initVeVip2D > 0) {
      this.initVeVip2D -= 1;
      this.priceVeVip2D = this.priceTicket * this.initVeVip2D;
    }
  }
  //  ve thuong
  tangVeThuong() {
    this.initVeThuong++;
    this.priceVeThuong2D = this.priceTicket * this.initVeThuong;
  }
  giamVeThuong() {
    if (this.initVeThuong > 0) {
      this.initVeThuong -= 1;
      this.priceVeThuong2D = this.priceTicket * this.initVeThuong;
    }
  }

  // ghe doi
  tangGheDoi() {
    this.initGheDoi2D++;
    this.priceGheDoi2D = this.priceTicket * this.initGheDoi2D;
  }

  giamGheDoi() {
    if (this.initGheDoi2D > 0) {
      this.initGheDoi2D -= 1;
      this.priceGheDoi2D = this.priceTicket * this.initGheDoi2D;
    }
  }
}
