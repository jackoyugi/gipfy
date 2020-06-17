import { Component, OnInit } from '@angular/core';
import {Giphy}from '../giphy';
import {GiphyService} from '../giphy-service/giphy.service';
import {HttpClient} from '@angular/common/http';
import { Gifs } from '../gifs-class/gifs';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  giphys: Giphy[];
  gifs:Gifs;
  //= [
  //  new Giphy (1, 'Giphy'),
  //   new Giphy(2, 'Stickers'),
 // ];

  constructor (giphyService:GiphyService, private http:HttpClient ){
    gif$: Gifs
    this.giphys = giphyService.getGiphys()
  
  }

  ngOnInit(): void {

    interface ApiResponse{
      sticker:string;
      gifs:string;
    }
    this.http.get<ApiResponse>("http://api.giphy.com/v1/gifs/search").subscribe(gifs =>{
      //succesful API request
      this.gifs = new Gifs(gifs.sticker, gifs.gifs)
    })
  }

}
