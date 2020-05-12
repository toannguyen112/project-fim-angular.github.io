import { Component, OnInit, Input } from "@angular/core";
import { Film } from "src/app/models/film";
import { Router } from "@angular/router";

@Component({
  selector: "app-item-phim",
  templateUrl: "./item-phim.component.html",
  styleUrls: ["./item-phim.component.scss"]
})
export class ItemPhimComponent implements OnInit {
  @Input() itemPhim: Film;

  constructor(private _router: Router) {}

  ngOnInit() {}
  datVe(maPhim) {
    this._router.navigate([`/detail/${maPhim}`] ,{fragment : "phimDangChieu"});
  }
}
