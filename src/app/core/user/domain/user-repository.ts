import { Observable } from "rxjs";
import { User } from "./user";

export interface UserRepository {
    save(user: User): void;
    currentUser(): Observable<User>;
}