import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { User } from "../domain/user";
import { UserHttpRepository } from "../infrastructure/user-http.repository";
import { UserStorageRepository } from "../infrastructure/user-storage.repository";

@Injectable({ providedIn: 'root' })
export class CurrentUser {
    constructor(private userHttp: UserHttpRepository, private userStorage: UserStorageRepository) { }

    run(): Observable<User> {
        return this.userHttp.currentUser().pipe(
            map(user => {
                this.userStorage.save(user);

                return user;
            })
        )
    }
}