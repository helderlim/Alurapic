import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.services';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

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
