import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path:'', component: TeamsComponent
  }
]

@NgModule({
  declarations: [
    TeamsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TeamsModule { }
