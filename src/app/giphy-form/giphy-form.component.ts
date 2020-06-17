import { Component, OnInit } from '@angular/core';
import {Giphy} from '../giphy';

@Component({
  selector: 'app-giphy-form',
  templateUrl: './giphy-form.component.html',
  styleUrls: ['./giphy-form.component.css']
})
export class GiphyFormComponent implements OnInit {

  
  newGiphy = new Giphy (0,"");
  constructor() { }

  ngOnInit() {
  }

}
