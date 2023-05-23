import { Observable } from "rxjs";
import { User } from "../../user/domain/user";
import { AuthRepository } from "../domain/auth-repository";
import { Inject, Injectable } from "@angular/core";
import { AUTH_REPOSITORY } from "src/app/app.module";
import { AuthHttpRepository } from "../infrastructure/auth-http.repository";

@Injectable()
export class SignIn {
  // private repository: AuthRepository;

  constructor(@Inject(AUTH_REPOSITORY) private repository: AuthRepository) {
    // this.repository = repository;
  }

  run(username: string, password: string): Observable<User> {
    return this.repository.signIn(username, password);
  }
}
