import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioCertificationComponent } from './portfolio-page/portfolio-certification/portfolio-certification.component';
import { PortfolioEducationComponent } from './portfolio-page/portfolio-education/portfolio-education.component';
import { PortfolioPersonalComponent } from './portfolio-page/portfolio-personal/portfolio-personal.component';
import { PortfolioProfExperienceComponent } from './portfolio-page/portfolio-prof-experience/portfolio-prof-experience.component';
import { PortfolioSummaryComponent } from './portfolio-page/portfolio-summary/portfolio-summary.component';
import { PortfolioTechnicalComponent } from './portfolio-page/portfolio-technical/portfolio-technical.component';
import { PortfolioThanksComponent } from './portfolio-page/portfolio-thanks/portfolio-thanks.component';

const routes: Routes = [
  { path: 'portfolio-summary', component: PortfolioSummaryComponent },
  { path: 'portfolio-technical', component: PortfolioTechnicalComponent },
  { path: 'portfolio-thanks', component: PortfolioThanksComponent },
  {
    path: 'portfolio-prof-experience',
    component: PortfolioProfExperienceComponent,
  },
  { path: 'portfolio-education', component: PortfolioEducationComponent },
  {
    path: 'portfolio-certification',
    component: PortfolioCertificationComponent,
  },
  { path: 'portfolio-personal', component: PortfolioPersonalComponent },
  { path: '', component: PortfolioSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
