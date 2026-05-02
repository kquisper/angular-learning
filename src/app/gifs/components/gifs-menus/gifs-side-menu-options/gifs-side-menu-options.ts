import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gifs-side-menu-options',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './gifs-side-menu-options.html',

})
export class GifsSideMenuOptions {
  menuAbierto = false
 }
