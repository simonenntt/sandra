import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { SwiperModule } from 'swiper/angular';
import { LayoutModule } from 'src/app/core/layout/layout.module';

const routes: Routes = [
  {path:'', component:HomeComponent}
]


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    SwiperModule,
    LayoutModule
  ]
})
export class HomeModule { }
