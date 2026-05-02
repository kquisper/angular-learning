
import {  Component, signal } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { GifsSideMainComponent } from '../../components/gifs-side/gifs-side';

@Component({
  selector: 'app-dashboard-pages',
  imports: [RouterOutlet,GifsSideMainComponent],
  templateUrl: './dashboard-pages.html',

})
export default class DashboardPageComponent { 

  
}
