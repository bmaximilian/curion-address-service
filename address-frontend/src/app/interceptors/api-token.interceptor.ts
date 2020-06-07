import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiTokenInterceptor implements HttpInterceptor {
    private apiToken = environment.apiToken;

    /**
     * Intercepts the http request to be able to manipulate it
     *
     * @param req - The request
     * @param next - next handler
     * @returns - The observable of the request
     */
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const requestWithBaseUrl = req.clone({ setHeaders: { Authorization: this.apiToken } });

        return next.handle(requestWithBaseUrl);
    }
}
