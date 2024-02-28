import { Component, Input } from '@angular/core';

@Component({
  selector: 'subtitle',
  standalone: true,
  imports: [],
  templateUrl: './subtitle.component.html',
  styleUrl: './subtitle.component.css'
})
export class SubtitleComponent {
  @Input() subtitle: string = '';
  @Input() fontSize: string = '';
}
