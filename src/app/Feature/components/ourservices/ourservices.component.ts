import { Component, OnInit } from '@angular/core';
import { Divcon2 } from 'src/app/common';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.scss']
})
export class OurservicesComponent implements OnInit {

  servtitle1: string = "Our Services"

  public servicelists: Divcon2[] = [
    {
      image: '../../../assets/images/mobile.png',
      title: 'Application Management and Modernisation',
      description: `Here at Tagline, we provide the service of Application management and modernisation for the growth of
    your business. We update the old application with new approaches, including the latest languages,
    frameworks, and platforms.`,
      button: 'Learn More',
    },
    {
      image: '../assets/images/web-design-icon.webp',
      title: 'Software Product Engineering',
      description: 'We are dedicated to providing the best Software product engineering services for your business. Our team of developers provides the service of software product engineering and it includes designing,developing, testing, and deploying the software products.',
      button: 'Learn More'
    },
    {
      image: '../assets/images/testing-icon.webp',
      title: 'Agile QA, Automation, and DevOps',
      description: 'At Tagline Infotech, we have a team of dedicated developers that provide the services like Agile QA,Automation, and DevOps. Our DevOps engineers constantly do the testing of software while Agile QAensures the quality of the software.',
      button: 'Learn More'
    },
    {
      image: '../assets/images/uiux-design-icon.webp',
      title: 'Digital Strategy & Design',
      description: 'Tagline Infotech helps clients to create a clear digital strategy and design for the growth of their businesses. Our developers and UI UX designers put the user first to create easy-to-navigate interfaces and smooth end-to-end experiences.',
      button: 'Learn More'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
