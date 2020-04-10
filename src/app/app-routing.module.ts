import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AboutComponent } from './pages/about/about.component';
import { AccutaneComponent } from './pages/accutane/accutane.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { CreateAccountComponent } from './pages/flow/pages/create-account/create-account.component';
import { ClinicalDetailsComponent } from './pages/flow/pages/clinical-details/clinical-details.component';
import { BillingComponent } from './pages/flow/pages/billing/billing.component';
import { PhotosComponent } from './pages/flow/pages/photos/photos.component';
import { ThanksComponent } from './pages/flow/pages/thanks/thanks.component';
import { CompleteComponent } from './pages/flow/pages/complete/complete.component';
import { DashboardComponent } from './pages/flow/pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'about', component: AboutComponent },
  { path: 'accutane', component: AccutaneComponent },
  { path: 'pricing', component: PricingComponent },
  {
    path: 'account',
    children: [
      { path: '', redirectTo: 'create', pathMatch: 'full' },
      { path: 'create', component: CreateAccountComponent },
      { path: 'clinical', component: ClinicalDetailsComponent },
      { path: 'billing', component: BillingComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'thanks', component: ThanksComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'complete', component: CompleteComponent }
    ]
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
