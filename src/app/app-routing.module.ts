import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AboutComponent } from './pages/about/about.component';
import { AccutaneComponent } from './pages/accutane/accutane.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { CreateAccountComponent } from './pages/flow/pages/create-account/create-account.component';
import { ClinicalDetailsComponent } from './pages/flow/pages/clinical-details/clinical-details.component';


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
      { path: 'clinical', component: ClinicalDetailsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
