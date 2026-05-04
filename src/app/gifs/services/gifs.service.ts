import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type{ GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';


function loadfromLocalStorage(): Record<string, Gif[]> {
    const data = localStorage.getItem('searchHistory') ?? '{}';
    return data ? JSON.parse(data) : {}
}

@Injectable({
    providedIn: 'root'

})
export class GifsService {
    private http = inject(HttpClient)
    //mi proio objeto
    trendingGifs = signal<Gif[]>([])
    trendingGifsLoading = signal(true)

    searchHistory = signal<Record<string, Gif[]>>(loadfromLocalStorage())
    searchHistorykey = computed( () => Object.keys(this.searchHistory()) )


    savetolocalStorage = effect( () => {
        localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory()))
    })



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


    searchgifs(query: string) {
            
     return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`,{
        params: {
            api_key: environment.apiKey,
            q: query,  
            limit: 20,
            offset:0,
            rating:'g'
        }
     }).pipe(
        map((resp) => GifMapper.mapGiphyItemsToGifsArray(resp.data)),
        // Historiasl
        tap((gifs) => {
            this.searchHistory.update((history) => (
                {
                    ...history,
                    [query.toLowerCase()]: gifs
                }
            ))
            })
     )
    }

    getHistoryGifs(query: string): Gif[]{
        return this.searchHistory()[query.toLowerCase()] || [];
    }


}