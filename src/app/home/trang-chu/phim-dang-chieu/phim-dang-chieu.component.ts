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
  @Input("danhSachPhimDangChieu") danhSachPhimDangChieu: any[] = [];
  public ds: any[] = [];
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
