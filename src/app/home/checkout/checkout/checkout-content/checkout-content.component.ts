import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-checkout-content",
  templateUrl: "./checkout-content.component.html",
  styleUrls: ["./checkout-content.component.scss"]
})
export class CheckoutContentComponent implements OnInit {
  @Input("thongTinPhim") thongTinPhim: any;
  @Output("emitNavigate") emitNavigate = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  chonGhe(value) {
    this.emitNavigate.emit(value)
  }
}
