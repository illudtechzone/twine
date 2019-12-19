import { ImageCropperModule } from 'ngx-img-cropper';
import { RouterModule } from '@angular/router';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { IonicModule } from '@ionic/angular';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddComplaintComponent, ImageSelectorComponent],
  imports: [
    FormsModule,
    CommonModule,
    ImageCropperModule,
    RouterModule,
    IonicModule.forRoot(),
  ],
exports: [AddComplaintComponent, ImageSelectorComponent]
})
export class SharedModule { }
