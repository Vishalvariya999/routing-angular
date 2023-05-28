import { Component, OnInit } from '@angular/core';
import { Choose } from 'src/app/common';

@Component({
  selector: 'app-taglone-expcard',
  templateUrl: './taglone-expcard.component.html',
  styleUrls: ['./taglone-expcard.component.scss']
})
export class TagloneExpcardComponent implements OnInit {

  chooseHead: string = "Why Choose Tagline Infotech ?";
  chooseDes: string = "We have a team of developers who use their expertise to provide complete web development,mobile app development,testing & assurance, SaaS development, and designing services. Tagline Infotech has a team of developers that you can hire by mentioning the requirements for your project. Save time and money by hiring our developers for your startup or large-scale company. Our team of developers has the experience to understand the business ideasof the clients to provide solutions that focus on the core values of the business. Here you will find some benefits of hiring developers from us."

  chooses: Choose[] = [
    {
      image: '../assets/images/choose-roadmap.png',
      title1: '01',
      title2: 'Progressive Roadmap',
      des: 'Our team of developers creates a progressive roadmap that includes a strategic plan to define a goal and major steps to reach that goal. We have a team of developers that uses progressive'
    },
    {
      image: '../assets/images/choose-project.png',
      title1: '02',
      title2: 'Efficient Project Management',
      des: 'We believe in efficient project management and our experienced developers use project management tools like Wrike and Zoho. Our developers use these project management tools efficiently'
    },
    {
      image: '../assets/images/choose-flexible.svg',
      title1: '03',
      title2: 'Flexible Engagement Model',
      des: 'We provide flexible engagement models so that clients can hire developers for their projects. These engagement models are flexible so if you aren’t satisfied with any model you can switch to another.'
    },
    {
      image: '../assets/images/choose-cost.png',
      title1: '04',
      title2: 'Cost-Effective',
      des: 'Our team of developers provides the best development services at affordable prices. We believe thathigh-quality solutions can be delivered at cost-effective prices and that’s why we provide different hiring'
    },
    {
      image: '../assets/images/choose-delivery.png',
      title1: '05',
      title2: 'Consistent Delivery',
      des: 'Our developers follow an agile approach to deliver the project before the deadline. We are providing consistent delivery of fully-featured projects as per the client’s requirements.'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
