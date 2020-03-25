import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { HeroComponent } from './pages/home/components/hero/hero.component';
import { BeforeAfterComponent } from './pages/home/components/before-after/before-after.component';
import { CtaComponent } from './pages/home/components/cta/cta.component';
import { AdvantagesComponent } from './pages/home/components/advantages/advantages.component';
import { HowItWorksComponent } from './pages/home/components/how-it-works/how-it-works.component';
import { PricingComponent } from './pages/home/components/pricing/pricing.component';
import { WhyAccutaneComponent } from './pages/home/components/why-accutane/why-accutane.component';
import { FaqComponent } from './pages/faq/faq.component';
import { CommonPageHeaderComponent } from './components/common-page-header/common-page-header.component';
import { FaqItemComponent } from './pages/faq/components/faq-item/faq-item.component';
import { LearnMoreFooterComponent } from './components/learn-more-footer/learn-more-footer.component';
import { AboutComponent } from './pages/about/about.component';
import { AccutaneComponent } from './pages/accutane/accutane.component';

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
    HeroComponent,
    BeforeAfterComponent,
    CtaComponent,
    AdvantagesComponent,
    HowItWorksComponent,
    PricingComponent,
    WhyAccutaneComponent,
    FaqComponent,
    CommonPageHeaderComponent,
    FaqItemComponent,
    LearnMoreFooterComponent,
    AboutComponent,
    AccutaneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
