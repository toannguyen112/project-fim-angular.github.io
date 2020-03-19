import { TransformDataService } from "./../../../services/transformData.service";
import { Subscription } from "rxjs";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Rap } from "src/app/models/rap";
import { RapService } from "src/app/services/rap.service";

@Component({
  selector: "app-cinema-theaters",
  templateUrl: "./cinema-theaters.component.html",
  styleUrls: ["./cinema-theaters.component.scss"]
})
export class CinemaTheatersComponent implements OnInit {
  @Input("rap") rap: Rap;
  @Output("emitRap") emitRap = new EventEmitter();
  public heThongRap: any[] = [];
  public sub: Subscription;
  constructor(
    private rapService: RapService,
    private transformData: TransformDataService
  ) {}

  ngOnInit() {}
  selectCinema(value) {
    this.emitRap.emit(value);
  }
}
