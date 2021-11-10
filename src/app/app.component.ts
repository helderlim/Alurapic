import { Component } from '@angular/core';
import { PhotoService } from './photos/photo/photo.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: object[] = [];  

  constructor(photoService: PhotoService){

    photoService
    .lsitFromUser('flavio')
    .subscribe(photos => this.photos = photos);
  }


}