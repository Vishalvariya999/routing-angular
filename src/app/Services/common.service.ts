import { Injectable } from '@angular/core';
import { City } from '../common';

// export interface City {
//   id: number,
//   name: string,
//   population: number
// }
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public cities: City[] = [
    {
      id: 101,
      name: 'Surat',
      population: 100000
    },
    {
      id: 102,
      name: 'Ahamdabad',
      population: 200000
    },
    {
      id: 103,
      name: 'Baroda',
      population: 50000
    },
    {
      id: 103,
      name: 'Rajkot',
      population: 30000
    },
    {
      id: 104,
      name: 'Dang',
      population: 100000
    },
    {
      id: 105,
      name: 'Amreli',
      population: 200000
    },
    {
      id: 106,
      name: 'Bihar',
      population: 50000
    },
    {
      id: 107,
      name: 'Gandhinagar',
      population: 30000
    }
  ]
  constructor() { }
}
