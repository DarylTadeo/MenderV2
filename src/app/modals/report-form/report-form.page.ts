import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.page.html',
  styleUrls: ['./report-form.page.scss'],
})
export class ReportFormPage implements OnInit {
  name: any;
  contact: any;
  type: any;
  subject: any;
  description: any;
  files: File[] = [];

  constructor(private modalController: ModalController, private alertController: AlertController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async submitReport() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Confirm Report',
        message: 'Fullname: ' + this.name + '<br>' + 'Contact Number: ' + this.contact + '<br>' + 'Report Type: '
        + this.type + '<br>' + 'Subject: ' + this.subject + '<br>' + 'Description: ' + this.description,
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
              this.successReport();
            }
           }
          ]
      });

      await alert.present();
    }

    async successReport(){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Successfully Reported',
        buttons: [{
          text: 'Thanks',
          handler: () => {
            this.dismiss();
          }
        }]
      });

      await alert.present();
    }

    onSelect(event) {
      console.log(event);
      this.files.push(...event.addedFiles);
    }

    onRemove(event) {
      console.log(event);
      this.files.splice(this.files.indexOf(event), 1);
    }
}
