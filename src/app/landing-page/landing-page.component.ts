import { Component } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [ProjectCardComponent]
})
export class LandingPageComponent {

}
