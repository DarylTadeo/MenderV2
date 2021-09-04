import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpFormPage } from './help-form.page';

const routes: Routes = [
  {
    path: '',
    component: HelpFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpFormPageRoutingModule {}
