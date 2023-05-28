import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { TagloneExpcardComponent } from './Feature/components/taglone-expcard/taglone-expcard.component';
import { BlogsComponent } from './Feature/components/blogs/blogs.component';
import { OurtechnologiesComponent } from './Feature/components/ourtechnologies/ourtechnologies.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TagloneExpcardComponent,
    BlogsComponent,
    OurtechnologiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('App module running')
  }
}
