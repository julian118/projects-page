import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DndAdventuresComponent } from './articles/dnd-adventures/dnd-adventures.component';

export const routes: Routes = [
    { path: 'home', component: LandingPageComponent},
    { path: 'about', component: AboutPageComponent},
    { path: 'dnd-adventures', component: DndAdventuresComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
