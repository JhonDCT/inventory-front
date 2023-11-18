import { Injectable } from "@angular/core";
import { UserRepository } from "../domain/user-repository";
import { User } from "../domain/user";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { UserDto, UserMapper } from "./user.dto";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class UserHttpRepository implements UserRepository {
    constructor(private http: HttpClient) { }

    currentUser(): Observable<User> {
        return this.http.get<UserDto>(`${environment.api}/auth/profile`).pipe(
            map(dto => new UserMapper(dto))
        );
    }

    save(user: User): void {
        throw new Error("Method not implemented.");
    }
}