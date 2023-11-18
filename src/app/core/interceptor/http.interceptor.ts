import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { AuthStorageRepository } from "../auth/infrastructure/auth-storage.repository";
import { Router } from "@angular/router";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(
        private authStorage: AuthStorageRepository,
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.authStorage.getToken();

        if (req.url.includes('/auth/login')) {
            return next.handle(req);
        }

        const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${authToken.value}`)
        });

        return next.handle(authReq).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === HttpStatusCode.Unauthorized) {
                    this.router.navigateByUrl('/login');
                }
                throw error;
            })
        );
    }
}