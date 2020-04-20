import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { CreditCardDirectivesModule } from 'angular-cc-library';

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
import { BillingComponent } from './pages/flow/pages/billing/billing.component';
import { PhotosComponent } from './pages/flow/pages/photos/photos.component';
import { ThanksComponent } from './pages/flow/pages/thanks/thanks.component';
import { CompleteComponent } from './pages/flow/pages/complete/complete.component';
import { DndDirective } from './directives/drag-and-drop.directive';
import { DomService } from './services/dom.service';
import { ModalService } from './services/modal.service';
import { QuizModalComponent } from './pages/home/modals/quiz/quiz.component';
import { PharmacyModalComponent } from './pages/flow/modals/pharmacy/pharmacy.component';
import { ProfileModalComponent } from './pages/flow/modals/profile/profile.component';
import { RateUsModalComponent } from './pages/flow/modals/rate-us/rate-us.component';
import { SubscriptionsModalComponent } from './pages/flow/modals/subscriptions/subscriptions.component';
import { FollowUpModalComponent } from './pages/flow/modals/follow-up/follow-up.component';
import { DashboardComponent } from './pages/flow/pages/dashboard/dashboard.component';
import { WeeklyIntakeViewComponent } from './pages/flow/components/weekly-intake-view/weekly-intake-view.component';
import { ProgressFlowComponent } from './pages/flow/components/progress-flow/progress-flow.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { ButtonComponent } from './components/button/button.component';
import { UserService } from './services/user.service';
import { SignUpComponent } from './pages/flow/pages/sign-up/sign-up.component';

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
    ClinicalDetailsComponent,
    BillingComponent,
    PhotosComponent,
    ThanksComponent,
    CompleteComponent,
    DndDirective,
    QuizModalComponent,
    PharmacyModalComponent,
    ProfileModalComponent,
    RateUsModalComponent,
    SubscriptionsModalComponent,
    FollowUpModalComponent,
    DashboardComponent,
    WeeklyIntakeViewComponent,
    ProgressFlowComponent,
    LoadingComponent,
    CallbackComponent,
    ButtonComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    CreditCardDirectivesModule,
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
  providers: [
    DomService,
    ModalService,
    UserService
  ],
  entryComponents: [
    QuizModalComponent,
    PharmacyModalComponent,
    ProfileModalComponent,
    RateUsModalComponent,
    SubscriptionsModalComponent,
    FollowUpModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
