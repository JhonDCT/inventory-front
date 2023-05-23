import { Observable } from "rxjs";
import { User } from "../../user/domain/user";

export interface AuthRepository {
  signIn(username: string, password: string): Observable<User>;
  logOut(): Observable<void>;
  profile(): Observable<User>;
  persistenceToken(token: string): void;
}
