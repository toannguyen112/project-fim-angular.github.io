import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TransformDataService } from "src/app/services/transformData.service";

@Component({
  selector: "app-cinema-item",
  templateUrl: "./cinema-item.component.html",
  styleUrls: ["./cinema-item.component.scss"]
})
export class CinemaItemComponent implements OnInit {
  @Input("cumRap") cumRap: any;
  @Output("emitLichChieuPhim") emitLichChieuPhim = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log(this.cumRap);
  }
  showListFilm() {
    this.emitLichChieuPhim.emit(this.cumRap);
  }
  
}
