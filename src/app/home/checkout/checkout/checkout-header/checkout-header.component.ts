import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-checkout-header",
  templateUrl: "./checkout-header.component.html",
  styleUrls: ["./checkout-header.component.scss"],
})
export class CheckoutHeaderComponent implements OnInit {
  @Input("status") status: any;
  public user;
  constructor(private userservice: UserService) {}

  ngOnInit() {
    this.user = this.userservice.credentials;
  }
}
