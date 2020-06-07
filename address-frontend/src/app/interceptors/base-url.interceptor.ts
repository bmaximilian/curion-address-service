import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
    /**
     * Intercepts the http request to be able to manipulate it
     *
     * @param req - The request
     * @param next - next handler
     * @returns - The observable of the request
     */
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const requestUrlIsAbsolute = /^(?:[a-z]+:)?\/\//i.test(req.url);

        // Do nothing when the request url is absolute -> already has a base url
        if (requestUrlIsAbsolute) return next.handle(req);

        const baseUrl = environment.apiBaseUrl;
        const requestWithBaseUrl = req.clone({ url: baseUrl.concat(req.url) });

        return next.handle(requestWithBaseUrl);
    }
}
