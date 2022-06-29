import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandraComponent } from './sandra.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:SandraComponent}
]

@NgModule({
  declarations: [
    SandraComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SandraModule { }
