import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';


@NgModule({
    declarations: [ 
        PhotoComponent, 
        PhotoListComponent 
    ],
    imports: [
        HttpClientModule,
        //boa pratica sempre importar no modulo o CommonModulo para tornar disponivel as diretivas do Angular
        //nunca importe BrowserModule a nao ser no app.module o principal 
        CommonModule
    ] 
})
export class PhotosModule {}