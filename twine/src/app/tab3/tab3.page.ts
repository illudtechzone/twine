import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  username: string="manu";

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    private actionSheetController:ActionSheetController
  ) { }


  updatePicture() {
    console.log('Clicked to update picture');
  }

async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [ {
        text: 'Edit profile',
        icon: 'create',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Logout',
        icon: 'log-out',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
 

}
