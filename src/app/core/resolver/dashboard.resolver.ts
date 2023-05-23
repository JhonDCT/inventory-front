import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { User } from "src/app/domain/user/domain/user";

@Injectable({
  providedIn: "root",
})
export class DashboardResolver implements Resolve<User> {
  constructor(private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User {
    try {
      const user = JSON.parse(sessionStorage.getItem("user")) as User;

      return user;
    } catch {
      this.router.navigateByUrl("/404");
    }
  }
}
