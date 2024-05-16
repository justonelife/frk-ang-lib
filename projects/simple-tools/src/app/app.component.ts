import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputControlComponent } from '../../../web-core/controls/input-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-tools';
}
