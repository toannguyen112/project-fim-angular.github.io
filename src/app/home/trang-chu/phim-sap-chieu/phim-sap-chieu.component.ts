import { Component, OnInit, AfterViewInit, Input } from "@angular/core";
import $ from "jquery";
import { Film } from "src/app/models/film";
declare var $: any;
@Component({
  selector: "app-phim-sap-chieu",
  templateUrl: "./phim-sap-chieu.component.html",
  styleUrls: ["./phim-sap-chieu.component.scss"]
})
export class PhimSapChieuComponent implements OnInit, AfterViewInit {
  constructor() {}

  @Input("danhSachPhimSapChieu") danhSachPhimSapChieu: Film[] = [];

  ngOnInit() {
    console.log(this.danhSachPhimSapChieu);
    
  }
  ngAfterViewInit() {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    });
  }
}
