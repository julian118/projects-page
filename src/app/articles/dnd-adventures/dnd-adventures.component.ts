import { Component } from '@angular/core';
import { DownloadButtonComponent } from "../../form-elements/download-button/download-button.component";

@Component({
    selector: 'app-dnd-adventures',
    standalone: true,
    templateUrl: './dnd-adventures.component.html',
    styleUrl: './dnd-adventures.component.scss',
    imports: [DownloadButtonComponent]
})
export class DndAdventuresComponent {

}
