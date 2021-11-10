import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  photos: any[] = [];  

//destinado a ingecao de dependecias 
  constructor(private photoService: PhotoService){}
  
//detinado a incializacao 
  ngOnInit(): void {
    this.photoService
    .lsitFromUser('flavio')
    .subscribe(photos => this.photos = photos);
  }
  


}