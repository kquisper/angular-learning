import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gifs-side-menu-small',
  imports: [RouterLink],
  templateUrl: './gifs-side-menu-small.html',
  
})
export class GifsSideMenuSmall { 
  
  menuAbierto = input.required<boolean>();
  value = output<boolean>();

  closeMenu() {
    this.value.emit(false);
  }
  
}
