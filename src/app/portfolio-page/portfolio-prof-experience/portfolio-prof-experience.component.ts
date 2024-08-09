import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-prof-experience',
  templateUrl: './portfolio-prof-experience.component.html',
  styleUrls: ['./portfolio-prof-experience.component.scss'],
})
export class PortfolioProfExperienceComponent {
  experiences: {
    title: string;
    company: string;
    timeperiod: string;
    points: string[];
  }[] = [
    {
      title: 'Software Programmer',
      company: 'Safemix Sharjah',
      timeperiod: '- May 2023 till now',
      points: [
        'Developing, upgrading and maintaining all the modules of the custom ERP software of the company.',
        'Documentation and analysis of existing system.',
        'Integration of modules with other systems',
        'Inspect the database backups',
        'Take part in key discussions with respective team leaders on required features/ upgrades',
        'Provide training as and when required'
      ],
    },
    {
      title: 'Senior Software Programmer',
      company: 'E-Softsat, JLT- Dubai',
      timeperiod: '- May 2022 till May 2023',
      points: [
        'Updating new features to the system.',
        'Documentation and analysis of existing system.',
        'Building and maintaining the inbuilt ERP applications.',
        'Performing analysis on different tasks and submitting the report on same to management.',
        'Check feasibility of new feature development, refactoring of existing code logic, updating features.',
      ],
    },
    {
      title: 'Senior Software Programmer',
      company: 'Al Khadim System Technology, Sharjah',
      timeperiod: '- March 2016 to April 2022',
      points: [
        'My roles include gathering new requirements from clients and implementing the functionality in system.',
        'Design, develop and deploy new modules as needed.',
        'Perform research work on new technologies and check on the feasibility of the same in current system.',
        'Delivering presentation to client on functionalities, certain domains, best practices.',
        'Conduct training on different modules within the software to the clients.',
        'Performing maintenance tasks like fixing bugs, taking backups etc.',
        'Understanding the difficulties faced by the users and aiding them for smooth transition.',
        `Gained experience in domains like Procurement, Sales, Accounts, Workshop, etc in the
        Ready-mix industries and the respective modules in the ERP system.`,
        'Perform PL/SQL tasks like creating triggers and stored procedures.',
        `Experienced in setting up backup for the client database as well as restoring them as and
        when needed for maintenance purposes.`,
        `Developed a custom oracle client tool (Keditor) with functionalities like connecting to the
        oracle client and perform various PL/SQL operations with ease.`,
      ],
    },
    {
      title: 'Intern/Software Programmer',
      company: 'Acty System India Pvt Ltd, Mumbai',
      timeperiod: '- Aug 2012 to September 2015',
      points: [
        'Develop screens and business logic based on requirements received from the client.',
        'Testing and refactoring the system for better performance.',
        'Updating or fixing features within the system as per the requirement of the clients.',
      ],
    },
  ];
}
