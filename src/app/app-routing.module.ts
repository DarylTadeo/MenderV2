import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'report-form',
    loadChildren: () => import('./modals/report-form/report-form.module').then( m => m.ReportFormPageModule)
  },
  {
    path: 'help-form',
    loadChildren: () => import('./modals/help-form/help-form.module').then( m => m.HelpFormPageModule)
  },
  {
    path: 'request-form',
    loadChildren: () => import('./modals/request-form/request-form.module').then( m => m.RequestFormPageModule)
  },
  {
    path: 'feedback-form',
    loadChildren: () => import('./modals/feedback-form/feedback-form.module').then( m => m.FeedbackFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
