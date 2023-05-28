import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.scss']
})
export class RegistraionComponent implements OnInit {

  constructor() { }
  // set: any;
  // setVal() {
  //   this.set = {
  //     rno: 101,
  //     firstName: 'Variya',
  //     lastName: 'Vishal',
  //     studemail: 'vishal11@gmail.com'
  //   }
  // }

  cities: any[] = [
    {
      id: 101,
      name: 'Surat'
    },
    {
      id: 102,
      name: 'Ahamdabad'
    },
    {
      id: 103,
      name: 'Rajkot'
    }
  ]

  submit(frm: NgForm) {
    console.log('frm :>> ', frm);
  }

  ngOnInit(): void {
  }

}
