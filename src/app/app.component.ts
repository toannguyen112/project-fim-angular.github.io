import { Component, OnInit } from "@angular/core";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}
  title = "project-film";
  ngOnInit() {
    const credentialString = JSON.parse(localStorage.getItem("credentials"));

    if (credentialString) {
      this.userService.setCredentials(credentialString);
    }
  }
}
