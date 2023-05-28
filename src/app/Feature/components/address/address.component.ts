import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/common';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  addresses: Address[] = [
    {
      head: 'India (HQ)',
      add: 'Digital Valley, 423, Apple Square, beside Lajamni Chowk, Mota Varachha, Surat,Gujarat 394101',
      number: '+91 9913 808 285'
    },

    {
      head: 'U.S.A',
      add: '2885 Old Zion, Cemetery Rd, Loganville, Ga 30052',
      number: '+1 (404) 483-3388'
    },

    {
      head: 'United Kingdom',
      add: '65 Byron road North wembley Middlesex, london HA0 3PB',
      number: '+44 78240 75400',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
