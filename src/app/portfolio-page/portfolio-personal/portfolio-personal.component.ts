import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-personal',
  templateUrl: './portfolio-personal.component.html',
  styleUrls: ['./portfolio-personal.component.scss'],
})
export class PortfolioPersonalComponent {
  personalDetails: {
    title: string;
    content: string;
  }[] = [
    { title: 'Nationality', content: 'Indian' },
    { title: 'Date of Birth', content: '27-03-1990' },
    { title: 'Address', content: 'Sharjah' },
    { title: 'Marital Status', content: 'Married' },
    { title: 'Spoken Language', content: 'English, Hindi, Malayalam, Marathi' },
    { title: 'Reference', content: 'Available upon request.' },
    { title: 'Driving License', content: 'Yes, Dubai' },
  ];
}
