import { Injectable } from "@angular/core";
import { UserRepository } from "../domain/user-repository";
import { Observable } from "rxjs";
import { User } from "../domain/user";

@Injectable({ providedIn: 'root' })
export class UserStorageRepository implements UserRepository {
    save(user: User): void {
        sessionStorage.setItem("user", JSON.stringify(user));
    }

    currentUser(): Observable<User> {
        throw new Error("Method not implemented.");
    }

}