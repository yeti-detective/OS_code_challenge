import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AthleteComponent } from './athlete/athlete.component';
import { AthleteFormComponent } from './athlete-form/athlete-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AthleteComponent,
    AthleteFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
