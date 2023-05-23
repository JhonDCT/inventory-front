import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthToken } from "src/app/domain/auth/domain/auth-token";

export class AppHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = JSON.parse(sessionStorage.getItem("token")) as AuthToken;
    let authorization = "";

    if (token) {
      authorization = `Bearer ${token.value}`;
    }

    const authReq = req.clone({
      headers: req.headers.set("Authorization", authorization),
    });

    return next.handle(authReq);
  }
}
