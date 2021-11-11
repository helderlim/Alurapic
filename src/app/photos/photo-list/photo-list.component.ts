import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from '../photo/photo.services';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos: any[] = [];  

  //destinado a ingecao de dependecias 
    constructor(
      private photoService: PhotoService,
      private activatedRoute: ActivatedRoute
      ){}
    
  //detinado a incializacao 
    ngOnInit(): void {
      const userName = this.activatedRoute.snapshot.params['userName'];
      this.photoService
      .lsitFromUser(userName)
      .subscribe(photos => this.photos = photos);
    }
    
}
