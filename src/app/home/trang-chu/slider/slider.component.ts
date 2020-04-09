import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent implements OnInit {
  public silder = [
    {
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2020/03/vin-dau-nhot-15840272645345.png",
      trailer: "",
    },
    {
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2020/03/can-ho-15840277229265.jpg",
      trailer: "",
    },
    {
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2020/03/onward-15840276765820.jpg",
      trailer: "",
    },
    {
      hinhAnh: "https://s3img.vcdn.vn/123phim/2020/03/acc-15840278166544.jpg",
      trailer: "",
    },
    {
      hinhAnh: "https://s3img.vcdn.vn/123phim/2020/03/nang-3-15840278709796.jpg",
      trailer: "",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
