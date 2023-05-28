import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() navbarItems!: string[];
  btntype: string = 'Button';

  constructor() { }

  ngOnInit(): void {
  }

}
