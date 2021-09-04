import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-help-form',
  templateUrl: './help-form.page.html',
  styleUrls: ['./help-form.page.scss'],
})
export class HelpFormPage implements OnInit {
  name: any;
  contact: any;
  type: any;
  description: any;

  constructor(private modalController: ModalController, private alertController: AlertController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async submitHelpRequest() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm Ask for help',
      message: 'Fullname: ' + this.name + '<br>' + 'Contact Number: ' + this.contact + '<br>' + 'Report Type: '
      + this.type + '<br>' + 'Description: ' + this.description,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled!');
          }
         },
         {
          text: 'Submit',
          handler: () => {
            this.successHelp();
          }
         }
        ]
    });

    await alert.present();
  }

  async successHelp(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Successfully Asked for Help',
      buttons: [{
        text: 'Thanks',
        handler: () => {
          this.dismiss();
        }
      }]
    });

    await alert.present();
  }
}
