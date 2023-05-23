import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { Primitives } from "../../domain/shared/primitives";
import { User } from "../../user/domain/user";
import { Auth } from "../domain/auth";
import { AuthRepository } from "../domain/auth-repository";
import { AuthToken } from "../domain/auth-token";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthHttpRepository implements AuthRepository {
  constructor(private http: HttpClient) {}

  signIn(username: string, password: string): Observable<User> {
    return this.http
      .post<Primitives<Auth>>(`${environment.api}/auth/login`, {
        username,
        password,
      })
      .pipe(
        map((auth) => {
          this.persistenceToken(auth.token);

          return User.create({
            id: auth.user.id,
            name: auth.user.name,
            lastName: auth.user.lastName,
            username: auth.user.username,
            documentNumber: auth.user.documentNumber,
            telephone: auth.user.telephone,
          });
        })
      );
  }

  profile(): Observable<User> {
    throw new Error("Method not implemented.");
  }

  logOut(): Observable<void> {
    throw new Error("Method not implemented.");
  }

  persistenceToken(token: string): void {
    sessionStorage.setItem("token", JSON.stringify(new AuthToken(token)));
  }
}
