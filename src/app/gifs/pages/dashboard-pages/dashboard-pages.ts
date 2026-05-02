import { DatePipe } from '@angular/common';
import {  Component, signal } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { GifsSideLogo } from '../../components/gifs-side-logo/gifs-side-logo';
import { GifsSideMenuOptions } from '../../components/gifs-menus/gifs-side-menu-options/gifs-side-menu-options';
import { GifsSideMenuSmall } from '../../components/gifs-menus/gifs-side-menu-small/gifs-side-menu-small';
import { GifsSideDate } from '../../components/gifs-side-date/gifs-side-date';
import { GifsSideMenuHeader } from '../../components/gifs-side-menu-header/gifs-side-menu-header';
import { GifsSideEnterprise } from '../../components/gifs-side-enterprise/gifs-side-enterprise';
import { SideInfo } from '../../components/shared/side-info/side-info';

@Component({
  selector: 'app-dashboard-pages',
  imports: [ GifsSideLogo,GifsSideMenuOptions,GifsSideMenuSmall,RouterOutlet,SideInfo],
  templateUrl: './dashboard-pages.html',

})
export default class DashboardPageComponent { 

  menuAbierto = signal<boolean>(false);
  currentDate = new Date();

  
}
