import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-technical',
  templateUrl: './portfolio-technical.component.html',
  styleUrls: ['./portfolio-technical.component.scss'],
})
export class PortfolioTechnicalComponent {
  technicalSkills: {
    title: string;
    content: string;
  }[] = [
    { title: 'Backend Languages', content: 'Go, C#, VB.net, Nodejs' },
    { title: 'Scripting Languages', content: 'JavaScript' },
    { title: 'Client-side framework', content: 'Angular, React' },
    {
      title: 'Server-side framework/Library',
      content: 'Go standard Library, .Net Core, .net Framework',
    },
    { title: 'Reporting Tools', content: 'Crystal Reports, SSRS, Tableau' },
    {
      title: 'Development Tools',
      content: 'Visual Studio 2010, VS 2017, VS 2019, Visual Studio code',
    },
    {
      title: 'RDBMS',
      content: 'Oracle (12c), Microsoft SQL server, MySql, Postgres',
    },
    { title: 'Mobile Framework', content: 'Ionic (PWAs)' },
    { title: 'Cloud', content: 'AWS' },
    { title: 'Container Technology', content: 'Docker' },
    { title: 'Operating systems', content: 'Windows, Linux-Ubuntu, macOS' },
  ];
}
