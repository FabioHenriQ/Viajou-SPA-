import { Component } from '@angular/core';
import { SubtitleComponent } from '../../components/subtitle/subtitle.component';
import { OptionsComponent } from '../../components/options/options.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,SubtitleComponent, OptionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showContainer1: boolean = false;
  showContainer2: boolean = false;
  showContainer3: boolean = false;

  ToggleOptions(option: number): void {
    switch (option) {
      case 1:
        if(this.showContainer1 == false) {
          this.showContainer1 = true
        }else{
          this.showContainer1 = false
        }
        this.showContainer2 = false;
        this.showContainer3 = false;

        break;
      case 2:
        if(this.showContainer2 == false) {
          this.showContainer2 = true
        }else{
          this.showContainer2 = false
        }
        this.showContainer1 = false;
        this.showContainer3 = false;
        break;
      case 3:
        if(this.showContainer3 == false) {
          this.showContainer3 = true
        }else{
          this.showContainer3 = false
        }
        this.showContainer2 = false;
        this.showContainer1 = false;
        break;
    }
  }
}
