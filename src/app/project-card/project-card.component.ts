import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() projectName: string;
  @Input() projectDescription: string;
  @Input() projectLink: string;
  @Input() projectRoute: string;
  @Input() projectImageUrl: string;
}
