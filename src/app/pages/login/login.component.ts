import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AUTH_REPOSITORY } from "src/app/app.module";
import { AuthHttpRepository } from "src/app/core/auth/infrastructure/auth-http.repository";

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

  constructor(private authRepository: AuthHttpRepository) {}

  ngOnInit() {}
  ngOnDestroy() {}

  onSignIn(): void {
    const { user, pass } = this.form.value;

    this.authRepository.signIn(user, pass).subscribe((user) => {
      console.log(user);
    });
  }
}
