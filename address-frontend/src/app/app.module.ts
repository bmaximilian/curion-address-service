import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { AppUiModule } from './ui-components/app-ui.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { ApiTokenInterceptor } from './interceptors/api-token.interceptor';
import { getLocale } from './getLocale';

/**
 * required for AOT compilation
 * Factory method for http loader
 *
 * @param http - The http client
 * @returns - A new TranslateLoader instance
 */
export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        AppUiModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        !environment.production && StoreDevtoolsModule.instrument({ maxAge: 25 }),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BaseUrlInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiTokenInterceptor,
            multi: true,
        },
        {
            provide: LOCALE_ID,
            useValue: getLocale(),
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
