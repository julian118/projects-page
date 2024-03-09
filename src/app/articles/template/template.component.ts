import { Component } from '@angular/core';
import { DownloadButtonComponent } from "../../form-elements/download-button/download-button.component";

@Component({
    selector: 'app-template',
    standalone: true,
    templateUrl: './template.component.html',
    styleUrl: './template.component.scss',
    imports: [DownloadButtonComponent]
})
export class TemplateComponent {

}
