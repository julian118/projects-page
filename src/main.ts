import { APP_INITIALIZER} from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { inject } from "@vercel/analytics";
 
import { AppComponent } from "./app/app.component";
import { routes } from "./app/app.routes";
 
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        inject({ debug: false})
      }
    }
  ]
})
  .catch(err => console.error(err));

/*
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  */
