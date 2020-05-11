import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";
import { TransformDataService } from "src/app/services/transformData.service";

import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";
import { Router } from "@angular/router";
import { PhongveService } from "src/app/services/phongve.service";
@Component({
  selector: "app-checkout-office-detail",
  templateUrl: "./checkout-office-detail.component.html",
  styleUrls: ["./checkout-office-detail.component.scss"],
})
export class CheckoutOfficeDetailComponent implements OnInit, OnDestroy {
  @Input("thongTinPhim") thongTinPhim;
  @Input() maLichChieu;
  @Output("emitterStatus") emitterStatus = new EventEmitter();
  public status: boolean = true;
  public email: string = "";
  public phone: string = "";
  public price: number = 0;
  public soGheDaDat: number = 0;
  public SoGheConLai: number = 0;
  public danhSachGheDangDat: any[] = [];
  public myTime;
  public timer;
  public timeleft = 300;
  public counter = 0;
  public choosePayment = "";
  public showCorn = false;
  public payment: any[] = [
    {
      name: "Thanh toan qua zalo pay",
      img:
        "https://s3img.vcdn.vn/123phim/2018/12/08075f42d0c4bfc8f2063a35d5b9fca7.jpg",
    },
    {
      name: "Visa, Master, JCB",
      img:
        "https://s3img.vcdn.vn/123phim/2018/12/e20d486bc2a60a2a1d7186c0ec9e177b.png",
    },
    {
      name: "Thẻ ATM nội địa",
      img:
        "https://s3img.vcdn.vn/123phim/2018/12/784b134b515da6e0cb8779e2a33f8221.png",
    },
  ];

  public danhSachGheDayA: any[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false, Day: "A" },
    { SoGhe: 2, TenGhe: "số 2", Gia: 60000, TrangThai: false, Day: "A" },
    { SoGhe: 3, TenGhe: "số 3", Gia: 60000, TrangThai: true, Day: "A" },
    { SoGhe: 4, TenGhe: "số 4", Gia: 60000, TrangThai: true, Day: "A" },
    { SoGhe: 5, TenGhe: "số 5", Gia: 60000, TrangThai: false, Day: "A" },
    { SoGhe: 6, TenGhe: "số 6", Gia: 60000, TrangThai: false, Day: "A" },
    { SoGhe: 7, TenGhe: "số 7", Gia: 60000, TrangThai: false, Day: "A" },
    { SoGhe: 8, TenGhe: "số 8", Gia: 60000, TrangThai: false, Day: "A" },
    { SoGhe: 9, TenGhe: "số 9", Gia: 60000, TrangThai: false, Day: "A" },
    { SoGhe: 10, TenGhe: "số 10", Gia: 60000, TrangThai: false, Day: "A" },
    { SoGhe: 11, TenGhe: "số 11", Gia: 60000, TrangThai: false, Day: "A" },
    { SoGhe: 12, TenGhe: "số 12", Gia: 60000, TrangThai: false, Day: "A" },
  ];
  public danhSachGheDayB: any[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: true, Day: "B" },
    { SoGhe: 2, TenGhe: "số 2", Gia: 60000, TrangThai: true, Day: "B" },
    { SoGhe: 3, TenGhe: "số 3", Gia: 60000, TrangThai: true, Day: "B" },
    { SoGhe: 4, TenGhe: "số 4", Gia: 60000, TrangThai: true, Day: "B" },
    { SoGhe: 5, TenGhe: "số 5", Gia: 60000, TrangThai: false, Day: "B" },
    { SoGhe: 6, TenGhe: "số 6", Gia: 60000, TrangThai: false, Day: "B" },
    { SoGhe: 7, TenGhe: "số 7", Gia: 60000, TrangThai: false, Day: "B" },
    { SoGhe: 8, TenGhe: "số 8", Gia: 60000, TrangThai: false, Day: "B" },
    { SoGhe: 9, TenGhe: "số 9", Gia: 60000, TrangThai: false, Day: "B" },
    { SoGhe: 10, TenGhe: "số 10", Gia: 60000, TrangThai: false, Day: "B" },
    { SoGhe: 11, TenGhe: "số 11", Gia: 60000, TrangThai: false, Day: "B" },
    { SoGhe: 12, TenGhe: "số 12", Gia: 60000, TrangThai: false, Day: "B" },
  ];
  public danhSachGheDayC: any[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: true, Day: "C" },
    { SoGhe: 2, TenGhe: "số 2", Gia: 60000, TrangThai: true, Day: "C" },
    { SoGhe: 3, TenGhe: "số 3", Gia: 60000, TrangThai: true, Day: "C" },
    { SoGhe: 4, TenGhe: "số 4", Gia: 60000, TrangThai: true, Day: "C" },
    { SoGhe: 5, TenGhe: "số 5", Gia: 60000, TrangThai: false, Day: "C" },
    { SoGhe: 6, TenGhe: "số 6", Gia: 60000, TrangThai: false, Day: "C" },
    { SoGhe: 7, TenGhe: "số 7", Gia: 60000, TrangThai: false, Day: "C" },
    { SoGhe: 8, TenGhe: "số 8", Gia: 60000, TrangThai: false, Day: "C" },
    { SoGhe: 9, TenGhe: "số 9", Gia: 60000, TrangThai: false, Day: "C" },
    { SoGhe: 10, TenGhe: "số 10", Gia: 60000, TrangThai: false, Day: "C" },
    { SoGhe: 11, TenGhe: "số 11", Gia: 60000, TrangThai: false, Day: "C" },
    { SoGhe: 12, TenGhe: "số 12", Gia: 60000, TrangThai: false, Day: "C" },
  ];
  public danhSachGheDayD: any[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false, Day: "D" },
    { SoGhe: 2, TenGhe: "số 2", Gia: 60000, TrangThai: false, Day: "D" },
    { SoGhe: 3, TenGhe: "số 3", Gia: 60000, TrangThai: false, Day: "D" },
    { SoGhe: 4, TenGhe: "số 4", Gia: 60000, TrangThai: false, Day: "D" },
    { SoGhe: 5, TenGhe: "số 5", Gia: 60000, TrangThai: false, Day: "D" },
    { SoGhe: 6, TenGhe: "số 6", Gia: 60000, TrangThai: false, Day: "D" },
    { SoGhe: 7, TenGhe: "số 7", Gia: 60000, TrangThai: false, Day: "D" },
    { SoGhe: 8, TenGhe: "số 8", Gia: 60000, TrangThai: false, Day: "D" },
    { SoGhe: 9, TenGhe: "số 9", Gia: 60000, TrangThai: false, Day: "D" },
    { SoGhe: 10, TenGhe: "số 10", Gia: 60000, TrangThai: false, Day: "D" },
    { SoGhe: 11, TenGhe: "số 11", Gia: 60000, TrangThai: false, Day: "D" },
    { SoGhe: 12, TenGhe: "số 12", Gia: 60000, TrangThai: false, Day: "D" },
  ];
  public danhSachGheDayE: any[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: true, Day: "E" },
    { SoGhe: 2, TenGhe: "số 2", Gia: 60000, TrangThai: false, Day: "E" },
    { SoGhe: 3, TenGhe: "số 3", Gia: 60000, TrangThai: false, Day: "E" },
    { SoGhe: 4, TenGhe: "số 4", Gia: 60000, TrangThai: false, Day: "E" },
    { SoGhe: 5, TenGhe: "số 5", Gia: 60000, TrangThai: false, Day: "E" },
    { SoGhe: 6, TenGhe: "số 6", Gia: 60000, TrangThai: true, Day: "E" },
    { SoGhe: 7, TenGhe: "số 7", Gia: 60000, TrangThai: true, Day: "E" },
    { SoGhe: 8, TenGhe: "số 8", Gia: 60000, TrangThai: true, Day: "E" },
    { SoGhe: 9, TenGhe: "số 9", Gia: 60000, TrangThai: true, Day: "E" },
    { SoGhe: 10, TenGhe: "số 10", Gia: 60000, TrangThai: false, Day: "E" },
    { SoGhe: 11, TenGhe: "số 11", Gia: 60000, TrangThai: false, Day: "E" },
    { SoGhe: 12, TenGhe: "số 12", Gia: 60000, TrangThai: false, Day: "E" },
  ];
  public danhSachGheDayF: any[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false, Day: "F" },
    { SoGhe: 2, TenGhe: "số 2", Gia: 60000, TrangThai: false, Day: "F" },
    { SoGhe: 3, TenGhe: "số 3", Gia: 60000, TrangThai: false, Day: "F" },
    { SoGhe: 4, TenGhe: "số 4", Gia: 60000, TrangThai: false, Day: "F" },
    { SoGhe: 5, TenGhe: "số 5", Gia: 60000, TrangThai: false, Day: "F" },
    { SoGhe: 6, TenGhe: "số 6", Gia: 60000, TrangThai: false, Day: "F" },
    { SoGhe: 7, TenGhe: "số 7", Gia: 60000, TrangThai: false, Day: "F" },
    { SoGhe: 8, TenGhe: "số 8", Gia: 60000, TrangThai: true, Day: "F" },
    { SoGhe: 9, TenGhe: "số 9", Gia: 60000, TrangThai: true, Day: "F" },
    { SoGhe: 10, TenGhe: "số 10", Gia: 60000, TrangThai: false, Day: "F" },
    { SoGhe: 11, TenGhe: "số 11", Gia: 60000, TrangThai: false, Day: "F" },
    { SoGhe: 12, TenGhe: "số 12", Gia: 60000, TrangThai: false, Day: "F" },
  ];
  public danhSachGheDayH: any[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: false, Day: "H" },
    { SoGhe: 2, TenGhe: "số 2", Gia: 60000, TrangThai: false, Day: "H" },
    { SoGhe: 3, TenGhe: "số 3", Gia: 60000, TrangThai: true, Day: "H" },
    { SoGhe: 4, TenGhe: "số 4", Gia: 60000, TrangThai: true, Day: "H" },
    { SoGhe: 5, TenGhe: "số 5", Gia: 60000, TrangThai: true, Day: "H" },
    { SoGhe: 6, TenGhe: "số 6", Gia: 60000, TrangThai: false, Day: "H" },
    { SoGhe: 7, TenGhe: "số 7", Gia: 60000, TrangThai: false, Day: "H" },
    { SoGhe: 8, TenGhe: "số 8", Gia: 60000, TrangThai: false, Day: "H" },
    { SoGhe: 9, TenGhe: "số 9", Gia: 60000, TrangThai: false, Day: "H" },
    { SoGhe: 10, TenGhe: "số 10", Gia: 60000, TrangThai: false, Day: "H" },
    { SoGhe: 11, TenGhe: "số 11", Gia: 60000, TrangThai: false, Day: "H" },
    { SoGhe: 12, TenGhe: "số 12", Gia: 60000, TrangThai: false, Day: "H" },
  ];
  public danhSachGheDayI: any[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 60000, TrangThai: true, Day: "I" },
    { SoGhe: 2, TenGhe: "số 2", Gia: 60000, TrangThai: true, Day: "I" },
    { SoGhe: 3, TenGhe: "số 3", Gia: 60000, TrangThai: true, Day: "I" },
    { SoGhe: 4, TenGhe: "số 4", Gia: 60000, TrangThai: true, Day: "I" },
    { SoGhe: 5, TenGhe: "số 5", Gia: 60000, TrangThai: false, Day: "I" },
    { SoGhe: 6, TenGhe: "số 6", Gia: 60000, TrangThai: true, Day: "I" },
    { SoGhe: 7, TenGhe: "số 7", Gia: 60000, TrangThai: true, Day: "I" },
    { SoGhe: 8, TenGhe: "số 8", Gia: 60000, TrangThai: true, Day: "I" },
    { SoGhe: 9, TenGhe: "số 9", Gia: 60000, TrangThai: false, Day: "I" },
    { SoGhe: 10, TenGhe: "số 10", Gia: 60000, TrangThai: false, Day: "I" },
    { SoGhe: 11, TenGhe: "số 11", Gia: 60000, TrangThai: false, Day: "I" },
    { SoGhe: 12, TenGhe: "số 12", Gia: 60000, TrangThai: false, Day: "I" },
  ];

  constructor(
    private _transformData: TransformDataService,
    private _route: Router,
    private phonVeService: PhongveService
  ) {}

  ngOnInit() {
    this.doCountdown();
    this._transformData.asData.subscribe((res) => {
      this.price = res;
    });
  }
  ngOnDestroy() {
    // stop time
    clearTimeout(this.myTime);
  }
  showPopCorn() {
    console.log("work");
    
    this.showCorn = !this.showCorn;
  }

  doCountdown() {
    this.myTime = setTimeout(() => {
      this.counter++;
      this.timer = this.convertSecond(this.timeleft - this.counter);
      this.processCount();
    }, 1000);
    console.log(this.timer);
  }

  convertSecond(s) {
    var min = Math.floor(s / 60);
    var sec = s % 60;
    return min + ":" + sec;
  }
  processCount() {
    // emit  event count

    console.log("count is ", this.timer);
    if (this.counter == this.timeleft) {
      this.noti("Hết thời gian đặt vé", "warning");
      this.emitterStatus.emit(this.status);
    } else {
      this.doCountdown();
    }
  }

  // funtcion dat ghe
  datGheParent(status, ghe) {
    console.log(status, ghe);
    if (status) {
      this.danhSachGheDangDat.push(ghe);
    } else {
      let index = this.danhSachGheDangDat.findIndex(
        (item) => item.SoGhe == ghe.ShoGhe
      );
      this.danhSachGheDangDat.splice(index, 1);
    }
  }

  //  funtcion thông báo
  noti(text, icon) {
    Swal.fire({
      title: text,
      icon: icon,
    });
  }
  handleDatve() {
    var credentials = JSON.parse(localStorage.getItem("credentials"))
      ? JSON.parse(localStorage.getItem("credentials")).taiKhoan
      : null;
    console.log(credentials);

    // const ve = {
    //   maLichChieu: this.maLichChieu,
    //   danhSachVe: [
    //     {
    //       maGhe: 0,
    //       giaVe: 0,
    //     },
    //   ],
    //   taiKhoanNguoiDung: credentials,
    // };

    // this.phonVeService.datVe(ve).subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );

    if (!credentials) {
      this.noti("Yêu cầu đăng nhập", "warning");
      this._route.navigate(["/"]);
    } else if (!this.danhSachGheDangDat.length) {
      this.noti("Bạn chưa chọn ghế", "warning");
    } else if (this.email == "") {
      this.noti("Yêu cầu nhập Email", "warning");
    } else if (this.phone == "") {
      this.noti("Yêu cầu nhập Phone", "warning");
    } else if (this.choosePayment == "") {
      this.noti("Yêu cầu chọn phương thức thanh toán", "warning");
    } else {
      this.noti("Mua vé thành công", "success");
    }
  }

 
}
