import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurservicesComponent } from '../Feature/components/ourservices/ourservices.component';
import { HomeComponent } from '../Feature/components/home/home.component';
import { AboutusComponent } from '../Feature/components/aboutus/aboutus.component';
import { AddressComponent } from '../Feature/components/address/address.component';


@NgModule({
  declarations: [
    OurservicesComponent,
    HomeComponent,
    AboutusComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [

  ]
})
export class SharedModule { }
