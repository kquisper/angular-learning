import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuOptions } from '../gifs-menus/gifs-side-menu-options/gifs-side-menu-options';
import { GifsSideMenuSmall } from '../gifs-menus/gifs-side-menu-small/gifs-side-menu-small';
import { GifsSideLogo } from '../gifs-side-logo/gifs-side-logo';
import { SideInfo } from '../shared/side-info/side-info';

@Component({
  selector: 'app-gifs-side',
  imports: [GifsSideLogo,GifsSideMenuOptions,GifsSideMenuSmall,SideInfo],
  templateUrl: './gifs-side.html',
})
export class GifsSideMainComponent {
  menuAbierto = signal<boolean>(false);

 }
