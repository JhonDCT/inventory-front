import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AUTH_REPOSITORY } from "src/app/app.module";
import { AuthRepository } from "../domain/auth-repository";

@Injectable()
export class SignIn {
  // private repository: AuthRepository;

  constructor(@Inject(AUTH_REPOSITORY) private repository: AuthRepository) {
    // this.repository = repository;
  }

  run(username: string, password: string): Observable<void> {
    return this.repository.signIn(username, password);
  }
}
