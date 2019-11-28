import { IonicModule } from '@ionic/angular';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddComplaintComponent],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule.forRoot(),
  ],
exports: [AddComplaintComponent]
})
export class SharedModule { }
