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
        date: '2022.06 - 2024.01',
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
        job: 'Frontend Developer - Nekken',
        date: '2024.01 - present',
        description: [
          'Develop and maintain Angular applications with strong focus on WCAG 2.1 accessibility compliance;',
          'Implement new features, fix bugs, estimate tasks, write tests and perform code reviews to maintain code quality;',
          'Collaborate closely with cross-functional teams (QA, UX, backend) to deliver scalable solutions;',
          'Expand responsibilities by contributing to Java / Spring Boot services and PostgreSQL database tasks, strengthening full-stack knowledge;',
        ],
      },
    ];
  }
}
