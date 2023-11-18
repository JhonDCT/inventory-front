import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthRepository } from "../domain/auth-repository";
import { AuthToken } from "../domain/auth-token";

@Injectable({ providedIn: 'root' })
export class AuthStorageRepository implements AuthRepository {
    constructor() { }

    getToken(): AuthToken {
        const item = sessionStorage.getItem("token");

        return JSON.parse(item) as AuthToken;
    }

    persistenceToken(token: string): void {
        sessionStorage.setItem("token", JSON.stringify(new AuthToken(token)));
    }

    signIn(username: string, password: string): Observable<string> {
        throw new Error("Method not implemented.");
    }

    logOut(): Observable<void> {
        throw new Error("Method not implemented.");
    }
}