import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, switchMap } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../../user/domain/user";
import { UserDocumentNumber } from "../../user/domain/user-document-number";
import { UserId } from "../../user/domain/user-id";
import { UserTelephone } from "../../user/domain/user-telephone";
import { AuthRepository } from "../domain/auth-repository";
import { AuthToken } from "../domain/auth-token";
import { ProfileResponseAdapter } from "./auth-profile.adapter";

@Injectable({
  providedIn: "root",
})
export class AuthHttpRepository implements AuthRepository {
  constructor(private http: HttpClient) {}

  signIn(username: string, password: string): Observable<void> {
    return this.http
      .post<{ accessToken: string }>(`${environment.api}/auth/login`, {
        username,
        password,
      })
      .pipe(
        map(({ accessToken }) => {
          const authToken = new AuthToken(accessToken);

          sessionStorage.setItem("token", JSON.stringify(authToken));
        })
      );
  }

  profile(): Observable<User> {
    return this.http
      .get<ProfileResponseAdapter>(`${environment.api}/profile`)
      .pipe(
        map((profile) => {
          const user = new User(
            new UserId(profile.id),
            profile.name,
            profile.lastName,
            profile.username,
            new UserDocumentNumber(profile.documentNumber),
            new UserTelephone(profile.telephone)
          );

          sessionStorage.setItem("user", JSON.stringify(user));

          return user;
        })
      );
  }

  logOut(): Observable<void> {
    throw new Error("Method not implemented.");
  }
}
