import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-checkout-header",
  templateUrl: "./checkout-header.component.html",
  styleUrls: ["./checkout-header.component.scss"]
})
export class CheckoutHeaderComponent implements OnInit {
  @Input("status") status: any;

  constructor() {}

  ngOnInit() {
    console.log(this.status);
  }
}
