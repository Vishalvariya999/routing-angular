import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminChildComponent } from './components/admin-child/admin-child.component';
import { AdminChild2Component } from './components/admin-child2/admin-child2.component';
import { RegistraionComponent } from './components/registraion/registraion.component';

const routes: Routes = [
  {
    path: 'citiesList',
    component: AdminChildComponent,
    children: [
      { path: 'registration', component: RegistraionComponent },
    ]
  },
  {
    path: 'cityDetails/:id',
    component: AdminChild2Component
  },  
  {
    path: '**',
    redirectTo: 'citiesList'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
