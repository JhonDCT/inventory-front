import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InjectionToken, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { AuthHttpRepository } from "./core/auth/infrastructure/auth-http.repository";

export const AUTH_REPOSITORY = new InjectionToken("AuthRepository");

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent],
  providers: [
    // {
    //   provide: AUTH_REPOSITORY,
    //   useClass: new AuthHttpRepository(),
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
