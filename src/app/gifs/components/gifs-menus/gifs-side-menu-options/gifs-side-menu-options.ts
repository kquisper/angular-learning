import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface MenuOption {
  label: string;
  route: string;
  subLabel: string;
}


@Component({
  selector: 'app-gifs-side-menu-options',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './gifs-side-menu-options.html',

})
export class GifsSideMenuOptions {
  menuAbierto = false
  menuoptions:MenuOption[] = [
    {label:'Trending',route:'trending',subLabel:'Gifs del momento'},
    {label:'Search',route:'search',subLabel:'Buscador de gifs'},
  ]
 }
