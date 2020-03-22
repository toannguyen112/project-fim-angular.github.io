import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-checkout-office-detail",
  templateUrl: "./checkout-office-detail.component.html",
  styleUrls: ["./checkout-office-detail.component.scss"]
})
export class CheckoutOfficeDetailComponent implements OnInit {
  @Input("thongTinPhim") thongTinPhim: any;
  @Input() init: number = null;

  public email: string = "";
  public phone: string = "";
  payment: any[] = [
    {
      name: "Thanh toan qua zalo pay",
      img:
        "https://s3img.vcdn.vn/123phim/2018/12/08075f42d0c4bfc8f2063a35d5b9fca7.jpg"
    },
    {
      name: "Visa, Master, JCB",
      img:
        "https://s3img.vcdn.vn/123phim/2018/12/e20d486bc2a60a2a1d7186c0ec9e177b.png"
    },
    {
      name: "Thẻ ATM nội địa",
      img:
        "https://s3img.vcdn.vn/123phim/2018/12/784b134b515da6e0cb8779e2a33f8221.png"
    }
  ];

  public counter: number = 0;
  constructor() {}

  ngOnInit() {
    this.startCountdown();
  }
  startCountdown() {
    if (this.init && this.init > 0) {
      this.counter = this.init;
      this.doCountdown();
    }
  }
  doCountdown() {
    setTimeout(() => {
      this.counter = this.counter - 1;
      this.processCount();
    }, 1000);
  }
  processCount() {
    // emit  event count
    console.log("count is ", this.counter);
    if (this.counter === 0) {
      // emit event counter end
      alert("Hết Thời Gian Đặt Vé");
    } else {
      this.doCountdown();
    }
  }
}
