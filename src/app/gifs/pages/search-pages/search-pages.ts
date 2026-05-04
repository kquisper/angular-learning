import { Component, inject, signal } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interfaces';
import { GifsList } from "../../components/gifs-list/gifs-list";


@Component({
  selector: 'app-search-pages',
  imports: [GifsList],
  templateUrl: './search-pages.html',
 
})
export default class SearchPages {
  gifsService = inject(GifsService)

  gifs = signal<Gif[]>([])

  onsearch( query: string){
    this.gifsService.searchgifs(query).subscribe((gifs) => {
      this.gifs.set(gifs)
    });
  }

  




 }
