import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppUiModule } from './ui-components/app-ui.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
