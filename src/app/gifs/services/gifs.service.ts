import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type{ GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'

})
export class GifsService {
    private http = inject(HttpClient)
    //mi proio objeto
    trendingGifs = signal<Gif[]>([])
    trendingGifsLoading = signal(true)

    constructor() { 
        this.loadtrendingGifs()
        console.log("Servicio creado")
    }


    loadtrendingGifs() {

     this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
        params: {
            api_key: environment.apiKey,
            limit: 20,
            offset: 0,
            rating: 'g',
        
        }
        }).subscribe((resp) =>{

            const gifs = GifMapper.mapGiphyItemsToGifsArray(resp.data)
            this.trendingGifs.set(gifs)
            console.log(gifs)
        })
    }
    
}