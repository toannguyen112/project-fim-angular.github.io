import { Component, OnInit } from "@angular/core";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {
    const credentialUser = JSON.parse(localStorage.getItem("credentials"));
    const credentialAdmin = JSON.parse(localStorage.getItem("admin"));
    if (credentialUser) {
      this.userService.setCredentials(credentialUser);
    }
    if (credentialAdmin) {
      this.userService.setCredentialsAdmin(credentialAdmin);
    }
  }
}
