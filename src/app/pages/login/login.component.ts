import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { switchMap } from "rxjs";
import { AuthHttpRepository } from "src/app/domain/auth/infrastructure/auth-http.repository";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  form = new FormGroup({
    user: new FormControl("", [Validators.required]),
    pass: new FormControl("", [Validators.required]),
  });

  constructor(
    private authRepository: AuthHttpRepository,
    private router: Router
  ) {}

  ngOnInit() {}
  ngOnDestroy() {}

  onSignIn(): void {
    const { user, pass } = this.form.value;

    this.authRepository
      .signIn(user, pass)
      .pipe(switchMap(() => this.authRepository.profile()))
      .subscribe(() => {
        this.router.navigateByUrl("/dashboard");
      });
  }
}
