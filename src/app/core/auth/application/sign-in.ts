import { Injectable } from "@angular/core";
import { Observable, map, switchMap } from "rxjs";
import { AuthHttpRepository } from "../infrastructure/auth-http.repository";
import { AuthStorageRepository } from "../infrastructure/auth-storage.repository";

@Injectable({ providedIn: 'root' })
export class SignIn {
  constructor(private authHttp: AuthHttpRepository, private authStorage: AuthStorageRepository) {
  }

  run(username: string, password: string): Observable<void> {
    return this.authHttp.signIn(username, password).pipe(
      map(accessToken => {
        this.authStorage.persistenceToken(accessToken);
      }),
    );
  }
}
