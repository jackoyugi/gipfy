import { Injectable } from '@angular/core';
import {Giphys} from '../giphys';
import {HttpClient} from '@angular/common/http';
import { Gifs } from '../gifs-class/gifs';


@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  apiUrl = 'http://api.giphy.com/v1/gifs/search';

  getGiphys(){
    return Giphys
  }
  constructor(private http:HttpClient) { }

  getGifs() {
    return this.http.get<Gifs[]>(this.apiUrl)
  }
}
