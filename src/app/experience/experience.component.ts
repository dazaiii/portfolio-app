import { Component } from '@angular/core';

interface EventItem {
  job: string;
  date: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  public events: EventItem[];
  constructor() {
    this.events = [
      {
        job: 'Software Engineer Intern - Cytiva',
        date: '2021.07 - 2022.06',
        description: [
          'Creating new features and improvements using Angular (frontend) and Node.js working on AWS lambdas (backend);',
          'Working on cloud native app based on AWS;',
          'Performing bug fixes and code reviews;',
          'Creating unit tests in Jest;',
          'Preparing knowledge sharing presentations;',
          'Working in a scrum team and participating in scrum meetings;',
        ],
      },
      {
        job: 'Angular Frontend Developer - DahliaMatic',
        date: '2022.06 - present',
        description: [
          'Developing Angular applications in micro-frontend architecture;',
          'Being responsible for a couple of microfrontends;',
          'Application development in compliance with WCAG 2.1 requirements;',
          'Implementing new features, solving bugs, performing code review;',
          'Cooperation with backend, QA and design teams;',
          'Creating E2E tests in Cypress;',
          'Deploying microfrontends using OpenShift;',
          'Care about software quality, performance and security;',
        ],
      },
            {
        job: 'Fullstack Developer - Nekken',
        date: '2024.01 - present',
        description: [
          'Developing Angular application in compliance with WCAG 2.1 requirements;',
          'I am lead frontend developer in my team;',
          'My daily acitivities include implementing new features, solving bugs, estimating tasks, performing code reviews, creating tests;',
          'Implementing new features, solving bugs, performing code review;',
          'I started to support backend team and work as a fullstack developer (tech stack: Java 11 and PostgreSQL);',
        ],
      },
    ];
  }
}
