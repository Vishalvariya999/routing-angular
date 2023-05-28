import { Component, OnInit } from '@angular/core';
import { Heading } from 'src/app/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  heading: Heading = {
    head1: 'Software Development Company ',
    head2: '& IT Consultancy',
    title1: 'Serving',
    title2: 'Start-UPs To Fortune 500 ',
    des1: 'With the help of Innovation and Technology, We give you the power to ',
    des2: 'change the world with your ideas.',
    button: 'Schedule a meeting',
    image: '../assets/images/images.png'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
