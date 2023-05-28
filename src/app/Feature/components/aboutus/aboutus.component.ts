import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  address: string = 'Our Global Presence';
  add3: string = 'solutions@taglineinfotech.com';
  formHead: string = 'Get Your Free Quote Today';
  constructor() { }

  ngOnInit(): void {
  }

}
