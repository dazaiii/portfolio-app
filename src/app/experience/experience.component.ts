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
        job: 'Junior Software Engineer - Cytiva',
        date: '2021.07 - 2022.06',
        description: [
          'Developed new features and improvements using Angular for frontend.',
          'Built and maintained backend services with Node.js on AWS Lambda.',
          'Contributed to a cloud-native architecture leveraging AWS services.',
          'Performed bug fixes, code reviews, and implemented unit tests with Jest.',
        ],
      },
      {
        job: 'Frontend Developer - DahliaMatic',
        date: '2022.06 - 2024.01',
        description: [
          'Designed, implemented, and maintained Angular applications in a micro-frontend architecture.',
          'Took ownership of several microfrontends and ensured seamless integration.',
          'Ensured WCAG 2.1 accessibility compliance across applications.',
          'Implemented new features, fixed bugs, and performed code reviews to maintain code quality.',
          'Created end-to-end tests in Cypress to ensure stability and reliability.',
          'Deployed microfrontends using OpenShift, contributing to smooth CI/CD workflows.',
        ],
      },
            {
        job: 'Frontend Developer - Nekken',
        date: '2024.01 - present',
        description: [
          'Design, implement, and maintain Angular applications with strong focus on accessibility, performance, and scalability.',
          'Develop applications with emphasis on WCAG 2.1 compliance.',
          'Collaborate with QA, UX, and backend teams to deliver scalable, user-centered solutions.',
          'Contribute to backend services using Java/Spring Boot and PostgreSQL, strengthening full-stack knowledge.',
        ],
      },
    ];
  }
}
