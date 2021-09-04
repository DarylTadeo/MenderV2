import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.page.html',
  styleUrls: ['./request-form.page.scss'],
})
export class RequestFormPage implements OnInit {
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

  async submitRequest() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm Request',
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
            this.successRequest();
          }
         }
        ]
    });

    await alert.present();
  }

  async successRequest(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Successfully Sent Request',
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
