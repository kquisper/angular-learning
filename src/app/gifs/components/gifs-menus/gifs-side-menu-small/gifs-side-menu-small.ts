import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideInfo } from '../../shared/side-info/side-info';
import { GifsSideMenuHeader } from '../../gifs-side-menu-header/gifs-side-menu-header';
import { GifsSideEnterprise } from '../../gifs-side-enterprise/gifs-side-enterprise';
import { GifsSideDate } from '../../gifs-side-date/gifs-side-date';

@Component({
  selector: 'app-gifs-side-menu-small',
  imports: [RouterLink,GifsSideEnterprise,GifsSideDate,GifsSideMenuHeader],
  templateUrl: './gifs-side-menu-small.html',
  
})
export class GifsSideMenuSmall { 
  
  menuAbierto = input.required<boolean>();
  value = output<boolean>();

  closeMenu() {
    this.value.emit(false);
  }
  
}
