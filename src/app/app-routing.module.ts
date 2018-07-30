import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AthleteComponent } from './athlete/athlete.component';
import { AthleteFormComponent } from './athlete-form/athlete-form.component';

const routes: Routes = [
  { path: 'main', component: DashboardComponent },
  { path: 'athlete/new', component: AthleteFormComponent},
  { path: 'athlete/:id', component: AthleteComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
