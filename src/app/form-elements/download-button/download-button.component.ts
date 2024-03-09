import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-download-button',
  standalone: true,
  imports: [],
  templateUrl: './download-button.component.html',
  styleUrl: './download-button.component.scss'
})
export class DownloadButtonComponent {
@Input() filepath: string;
}
