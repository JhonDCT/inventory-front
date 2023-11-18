import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ErrorHandler, InjectionToken, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { AppErrorHandler } from "./core/error/error.handler";
import { AppHttpInterceptor } from "./core/interceptor/http.interceptor";
import { ProductsComponent } from './pages/products/products.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';

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
    ReactiveFormsModule
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, ProductsComponent, ProductCreateComponent, ProductUpdateComponent,],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    },
    // {
    //   provide: ErrorHandler,
    //   useClass: AppErrorHandler,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
