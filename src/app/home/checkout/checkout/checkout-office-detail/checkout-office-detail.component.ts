import { Component, OnInit, Input } from "@angular/core";
import { TransformDataService } from "src/app/services/transformData.service";

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
  public price: number = 0;
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

  public danhSachGheDayA: any[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 2, TenGhe: "số 2", Gia: 60000, TrangThai: false },
    { SoGhe: 3, TenGhe: "số 3", Gia: 60000, TrangThai: false },
    { SoGhe: 4, TenGhe: "số 4", Gia: 60000, TrangThai: false },
    { SoGhe: 5, TenGhe: "số 5", Gia: 60000, TrangThai: false },
    { SoGhe: 6, TenGhe: "số 6", Gia: 60000, TrangThai: false },
    { SoGhe: 7, TenGhe: "số 7", Gia: 60000, TrangThai: false },
    { SoGhe: 8, TenGhe: "số 8", Gia: 60000, TrangThai: false },
    { SoGhe: 9, TenGhe: "số 9", Gia: 60000, TrangThai: false },
    { SoGhe: 10, TenGhe: "số 10", Gia: 60000, TrangThai: false }
  ];
  public danhSachGheDayB: any[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: true },
    { SoGhe: 2, TenGhe: "số 2", Gia: 60000, TrangThai: true },
    { SoGhe: 3, TenGhe: "số 3", Gia: 60000, TrangThai: true },
    { SoGhe: 4, TenGhe: "số 4", Gia: 60000, TrangThai: true },
    { SoGhe: 5, TenGhe: "số 5", Gia: 60000, TrangThai: true },
    { SoGhe: 6, TenGhe: "số 6", Gia: 60000, TrangThai: false },
    { SoGhe: 7, TenGhe: "số 7", Gia: 60000, TrangThai: false },
    { SoGhe: 8, TenGhe: "số 8", Gia: 60000, TrangThai: false },
    { SoGhe: 9, TenGhe: "số 9", Gia: 60000, TrangThai: false },
    { SoGhe: 10, TenGhe: "số 10", Gia: 60000, TrangThai: false }
  ];
  public danhSachGheDayC: any[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: true },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: true },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: true }
  ];
  public danhSachGheDayD: any[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false }
  ];
  public danhSachGheDayE: any[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false }
  ];
  public danhSachGheDayF: any[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false }
  ];
  public danhSachGheDayH: any[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false }
  ];
  public danhSachGheDayI: any[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: true },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: true },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: true },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false },
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false }
  ];

  public counter: number = 0;
  constructor(private _transformData: TransformDataService) {}

  ngOnInit() {
    // this.startCountdown();
    this._transformData.asData.subscribe(res => {
      this.price = res;
    });
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

  chonGhe(ghe) {
    console.log(ghe);
  }
}
