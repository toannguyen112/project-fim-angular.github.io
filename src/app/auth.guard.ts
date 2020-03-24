import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./services/user.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private _userService: UserService, private _route: Router) {}
  canActivate() :boolean {
    if (this._userService.loggedIn()) {
      return true;
    } else {
      this._route.navigate(["./"]);
      return false;
    }
  }
}
