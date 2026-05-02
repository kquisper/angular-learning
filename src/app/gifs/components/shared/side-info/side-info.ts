import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsSideDate } from '../../gifs-side-date/gifs-side-date';
import { GifsSideEnterprise } from '../../gifs-side-enterprise/gifs-side-enterprise';
import { GifsSideMenuHeader } from '../../gifs-side-menu-header/gifs-side-menu-header';

@Component({
  selector: 'app-side-info',
  imports: [ GifsSideMenuHeader,GifsSideEnterprise,GifsSideDate],
  templateUrl: './side-info.html',
  
})
export class SideInfo { 
  
}
