import { Gif } from "../interfaces/gif.interfaces";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper {
    static mapGiphyItemToGif(giphyItem: GiphyItem): Gif {
        return {
            title: giphyItem.title,
            id: giphyItem.id,
            url: giphyItem.images.original.url,
        };
    }

    static mapGiphyItemsToGifsArray(giphyItems: GiphyItem[]): Gif[] {
        return giphyItems.map((item) => this.mapGiphyItemToGif(item));
    }
}