import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpFormPageRoutingModule } from './help-form-routing.module';

import { HelpFormPage } from './help-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpFormPageRoutingModule
  ],
  declarations: [HelpFormPage]
})
export class HelpFormPageModule {}
