import { Observable } from "rxjs";
import { User } from "../../user/domain/user";

export interface AuthRepository {
  signIn(username: string, password: string): Observable<void>;
  logOut(): Observable<void>;
  profile(): Observable<User>;
}
