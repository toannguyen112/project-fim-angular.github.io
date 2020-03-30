import { Subscription } from "rxjs";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Rap } from "src/app/models/rap";

@Component({
  selector: "app-cinema-theaters",
  templateUrl: "./cinema-theaters.component.html",
  styleUrls: ["./cinema-theaters.component.scss"]
})
export class CinemaTheatersComponent implements OnInit {
  @Input("rap") rap: Rap;
  @Output("emitRap") emitRap = new EventEmitter();
  @Input("valueDefaut") valueDefaut: any;
  public heThongRap: any[] = [];
  public sub: Subscription;

  constructor() {
    
  }

  ngOnInit() {}
  selectCinema(value) {
    this.emitRap.emit(value);
  }
}
