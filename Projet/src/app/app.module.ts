import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { coursesComponent } from './courses.component';
import { CoursComponent } from './cours/cours.component';

@NgModule({
  declarations: [
    AppComponent,
    coursesComponent,
    CoursComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
