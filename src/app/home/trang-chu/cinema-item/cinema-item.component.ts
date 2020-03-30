import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-cinema-item",
  templateUrl: "./cinema-item.component.html",
  styleUrls: ["./cinema-item.component.scss"]
})
export class CinemaItemComponent implements OnInit {
  @Input("cumRap") cumRap: any;
  @Input("maCumRapActive") maCumRapActive: any;
  @Output("emitLichChieuPhim") emitLichChieuPhim = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log(this.maCumRapActive);
  }
  showListFilm() {
    this.emitLichChieuPhim.emit(this.cumRap);
  }
}
