import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SignIn } from "src/app/core/auth/application/sign-in";
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

  constructor(private signIn: SignIn, private router: Router, private authHttp: AuthHttpRepository) { }

  ngOnInit() { }

  ngOnDestroy() { }

  onSignIn(): void {
    const { user, pass } = this.form.value;

    this.signIn.run(user, pass).subscribe(() => {
      this.router.navigateByUrl('/dashboard');
    })
  }
}
