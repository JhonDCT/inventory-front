import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthRepository } from "../domain/auth-repository";
import { AuthToken } from "../domain/auth-token";

@Injectable({ providedIn: 'root' })
export class AuthHttpRepository implements AuthRepository {
  constructor(private http: HttpClient) { }

  signIn(username: string, password: string): Observable<string> {
    return this.http
      .post<{ accessToken: string }>(`${environment.api}/auth/login`, {
        username,
        password,
      })
      .pipe(
        map(({ accessToken }) => accessToken),
        catchError(error => {
          throw error;
        })
      );
  }

  logOut(): Observable<void> {
    throw new Error("Method not implemented.");
  }

  persistenceToken(token: string): void { }

  getToken(): AuthToken {
    throw new Error("Method not implemented.");
  }
}
