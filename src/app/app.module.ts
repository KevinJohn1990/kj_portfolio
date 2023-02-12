import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { PortfolioSummaryComponent } from './portfolio-page/portfolio-summary/portfolio-summary.component';
import { PortfolioTechnicalComponent } from './portfolio-page/portfolio-technical/portfolio-technical.component';
import { PortfolioProfExperienceComponent } from './portfolio-page/portfolio-prof-experience/portfolio-prof-experience.component';
import { PortfolioEducationComponent } from './portfolio-page/portfolio-education/portfolio-education.component';
import { PortfolioCertificationComponent } from './portfolio-page/portfolio-certification/portfolio-certification.component';
import { PortfolioPersonalComponent } from './portfolio-page/portfolio-personal/portfolio-personal.component';
import { PortfolioThanksComponent } from './portfolio-page/portfolio-thanks/portfolio-thanks.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioPageComponent,
    PortfolioSummaryComponent,
    PortfolioTechnicalComponent,
    PortfolioProfExperienceComponent,
    PortfolioEducationComponent,
    PortfolioCertificationComponent,
    PortfolioPersonalComponent,
    PortfolioThanksComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgImageSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
