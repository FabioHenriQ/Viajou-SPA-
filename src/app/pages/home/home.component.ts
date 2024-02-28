import { Component } from '@angular/core';
import { SubtitleComponent } from '../../components/subtitle/subtitle.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SubtitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
