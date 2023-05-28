import { Component, OnInit } from '@angular/core';
import { Languages, TechHead } from 'src/app/common';

@Component({
  selector: 'app-ourtechnologies',
  templateUrl: './ourtechnologies.component.html',
  styleUrls: ['./ourtechnologies.component.scss']
})
export class OurtechnologiesComponent implements OnInit {

  tecnologies: string[] = [
    'Web',
    'Mobile',
    'Desktop',
    'Plateform',
    'Database / Data Storage',
    'Big Data',
    'Machine Learning',
    'DevOps',
    'Clouds'
  ];

  tech: TechHead = {
    head: 'Our Technologies',
    subHead: 'Web',
    title1: 'Back End',
    title2: 'Front End'
  }

  backends: Languages[] = [
    {
      image: '../assets/images/ror.png',
      title: 'Ruby on Rails'
    },

    {
      image: '../assets/images/python.png',
      title: 'Pythomn'
    },

    {
      image: '../assets/images/node_js.svg',
      title: 'Node Js'
    },

    {
      image: '../assets/images/php.png',
      title: 'Php'
    },

    {
      image: '../assets/images/android-java.png',
      title: 'Java'
    },

    {
      image: '../assets/images/go.png',
      title: 'Go Language'
    },
  ];

  frontends: Languages[] = [
    {
      image: '../assets/images/react-js.png',
      title: 'React Js'
    },

    {
      image: '../assets/images/angular-icon.png',
      title: 'Angular'
    },

    {
      image: '../assets/images/typescript-icon.png',
      title: 'Typescript'
    },

    {
      image: '../assets/images/vue-js.png',
      title: 'Vue Js'
    },

    {
      image: '../assets/images/meter-js.png',
      title: 'Mateor Js'
    },

    {
      image: '../assets/images/javascript-icon.png',
      title: 'Java Script'
    },

    {
      image: '../assets/images/html5.png',
      title: 'HTML 5'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
