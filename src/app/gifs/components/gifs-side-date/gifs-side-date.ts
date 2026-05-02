import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-gifs-side-date',
  imports: [DatePipe],
  templateUrl: './gifs-side-date.html',
  
})
export class GifsSideDate { 
  currentDate = new Date();

}
