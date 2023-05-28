import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/common';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-admin-child',
  templateUrl: './admin-child.component.html',
  styleUrls: ['./admin-child.component.scss']
})
export class AdminChildComponent implements OnInit {

  citiesData!: City[];
  constructor(
    private router: Router, 
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.citiesData = this.commonService.cities
  }

  cityDetails(cityId: number) {
    if (cityId) {
      this.router.navigate([`admin/cityDetails/${cityId}`])
    }
    console.log('cityId :>> ', cityId);
  }

}
