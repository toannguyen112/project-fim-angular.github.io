import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-seat",
  templateUrl: "./seat.component.html",
  styleUrls: ["./seat.component.scss"]
})
export class SeatComponent implements OnInit {
  public status: boolean = false;
  @Input("itemGhe") itemGhe: any;
  @Output("emitterStatus") emitterStatus = new EventEmitter();
  constructor() {}
  public trangThai   : any ; 
  ngOnInit() {
   this.trangThai = this.itemGhe.TrangThai
  }
  datGhe(itemGhe) {
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
    }
    this.emitterStatus.emit(this.status);
  }
}
