import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FeedbackFormPage } from '../modals/feedback-form/feedback-form.page';
import { HelpFormPage } from '../modals/help-form/help-form.page';
import { ReportFormPage } from '../modals/report-form/report-form.page';
import { RequestFormPage } from '../modals/request-form/request-form.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public router: Router, private modalController: ModalController) { }

  ngOnInit() {
  }

  async redirectToReportForm() {
    const modal = await this.modalController.create({
      component: ReportFormPage,
    });

    return await modal.present();
  }

  async redirectToRequestForm() {
    const modal = await this.modalController.create({
      component: RequestFormPage,
    });

    return await modal.present();
  }

  async redirectToHelpForm() {
    const modal = await this.modalController.create({
      component: HelpFormPage,
    });

    return await modal.present();
  }

  async redirectToFeedbackForm() {
    const modal = await this.modalController.create({
      component: FeedbackFormPage,
    });

    return await modal.present();
  }

}
