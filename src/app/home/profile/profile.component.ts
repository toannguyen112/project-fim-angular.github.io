import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  public choosen: string = "about";

  constructor() {}

  ngOnInit() {}

  choosenComponent(value) {
    this.choosen = value;
  }
}
