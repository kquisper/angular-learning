import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service';
import { GifsList } from '../../components/gifs-list/gifs-list';

@Component({
  selector: 'app-gifs-history',
  imports: [GifsList],
  templateUrl: './gifs-history.html',

})
export default class GifsHistory { 

  gifservices = inject(GifsService)

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map(params => params['query']))
  )

  gifsbyKey = computed(()=> {
    return this.gifservices.getHistoryGifs(this.query())
  })

}
