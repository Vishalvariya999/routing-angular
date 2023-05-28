import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/common';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  ourBlogsHead: string = "Our Blogs";

  blogs: Blog[] = [
    {
      image: '../assets/images/Python-vs-Java.png',
      button: 'Python',
      date: '15/12/22',
      head1: 'Python vs Java Comparison Of',
      des: 'Quick Summary The most difficult decision for an entrepreneur is deciding on a programming...',
      endbtn: 'Read More ->'
    },

    {
      image: '../assets/images/Node.js-Application.png',
      button: 'Node Js',
      date: '9/12/22',
      head1: 'Best Practices for Node.js Application Development:...',
      des: 'Quick Summary Want to know about node js architecture and node js architecture best',
      endbtn: 'Read More ->'
    },

    {
      image: '../assets/images/Kotlin-vs-Java.png',
      button: 'RoR',
      date: '9/12/22',
      head1: 'JavaScript vs Ruby On Rails: What...',
      des: 'JavaScript vs Ruby On Rails: What...',
      endbtn: 'Read More ->'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
