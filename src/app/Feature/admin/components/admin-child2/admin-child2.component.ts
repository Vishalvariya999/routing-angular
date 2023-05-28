import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/common';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-admin-child2',
  templateUrl: './admin-child2.component.html',
  styleUrls: ['./admin-child2.component.scss']
})
export class AdminChild2Component implements OnInit {

  citieDetails: any;
  citieId!: number;
  constructor(
    private activeRouter: ActivatedRoute, 
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((response: any) => {
      if (response) {
        this.citieId = response.id
      }
      console.log('response', response)
    });

    this.commonService.cities.find((res) => {
      if (res.id == this.citieId) {
        this.citieDetails = res
      }
      console.log('this.citieDetails', this.citieDetails)
    });
  }
}
