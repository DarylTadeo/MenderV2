import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.page.html',
  styleUrls: ['./feedback-form.page.scss'],
})
export class FeedbackFormPage implements OnInit {
  name: any;
  feedback: any;

  constructor(private modalController: ModalController, private alertController: AlertController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async submitFeedback() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm Feedback',
      message: 'Fullname: ' + this.name + '<br>' + 'Feedback: ' + this.feedback,
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
            this.successFeedback();
          }
         }
        ]
    });

    await alert.present();
  }

  async successFeedback(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Successfully Added a Feedback',
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
