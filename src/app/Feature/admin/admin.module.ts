import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminChildComponent } from './components/admin-child/admin-child.component';
import { AdminChild2Component } from './components/admin-child2/admin-child2.component';
import { RegistraionComponent } from './components/registraion/registraion.component';
import { FormsModule, NgForm, NgModel } from '@angular/forms';


@NgModule({
  declarations: [
    AdminChildComponent,
    AdminChild2Component,
    RegistraionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule {
  constructor() {
    console.log('admin module');
  }
}
