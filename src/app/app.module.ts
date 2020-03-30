import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterCtaComponent } from './components/register-cta/register-cta.component';
import { HomeHeroComponent } from './pages/home/components/hero/hero.component';
import { HomeBeforeAfterComponent } from './pages/home/components/before-after/before-after.component';
import { HomeAdvantagesComponent } from './pages/home/components/advantages/advantages.component';
import { HomeHowItWorksComponent } from './pages/home/components/how-it-works/how-it-works.component';
import { HomePricingComponent } from './pages/home/components/pricing/pricing.component';
import { HomeWhyAccutaneComponent } from './pages/home/components/why-accutane/why-accutane.component';
import { FaqComponent } from './pages/faq/faq.component';
import { CommonPageHeaderComponent } from './components/common-page-header/common-page-header.component';
import { FaqItemComponent } from './pages/faq/components/faq-item/faq-item.component';
import { LearnMoreFooterComponent } from './components/learn-more-footer/learn-more-footer.component';
import { AboutComponent } from './pages/about/about.component';
import { AccutaneComponent } from './pages/accutane/accutane.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { CreateAccountComponent } from './pages/flow/pages/create-account/create-account.component';
import { FlowPageHeaderComponent } from './pages/flow/components/flow-page-header/flow-page-header.component';
import { FieldComponent } from './components/field/field.component';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { ClinicalDetailsComponent } from './pages/flow/pages/clinical-details/clinical-details.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/lang/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HomeHeroComponent,
    HomeBeforeAfterComponent,
    RegisterCtaComponent,
    HomeAdvantagesComponent,
    HomeHowItWorksComponent,
    HomePricingComponent,
    HomeWhyAccutaneComponent,
    FaqComponent,
    CommonPageHeaderComponent,
    FaqItemComponent,
    LearnMoreFooterComponent,
    AboutComponent,
    AccutaneComponent,
    PricingComponent,
    CreateAccountComponent,
    FlowPageHeaderComponent,
    FieldComponent,
    PhoneMaskDirective,
    ClinicalDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
