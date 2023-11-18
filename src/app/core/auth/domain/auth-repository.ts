import { Observable } from "rxjs";
import { AuthToken } from "./auth-token";

export interface AuthRepository {
  signIn(username: string, password: string): Observable<string>;
  logOut(): Observable<void>;
  persistenceToken(token: string): void;
  getToken(): AuthToken;
}
