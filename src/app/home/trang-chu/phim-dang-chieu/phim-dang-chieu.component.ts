import { Component, OnInit, AfterViewInit, Input } from "@angular/core";
import $ from "jquery";
import { Film } from "src/app/models/film";
declare var $: any;
@Component({
  selector: "app-phim-dang-chieu",
  templateUrl: "./phim-dang-chieu.component.html",
  styleUrls: ["./phim-dang-chieu.component.scss"]
})
export class PhimDangChieuComponent implements OnInit, AfterViewInit {
  @Input("danhSachPhimDangChieu") danhSachPhimDangChieu: Film[] = [];

  constructor() {}

  ngOnInit() {
    // console.log(this.danhSachPhimDangChieu.length);
  }

  ngAfterViewInit() {
    // $(".owl-carousel").owlCarousel({
    //   loop: true,
    //   margin: 10,
    //   nav: true,
    //   responsive: {
    //     0: {
    //       items: 1
    //     },
    //     600: {
    //       items: 3
    //     },
    //     1000: {
    //       items: 4
    //     }
    //   }
    // });
  }
}
