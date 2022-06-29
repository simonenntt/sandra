import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('src/app/features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'sandra',
    loadChildren: () =>
      import('src/app/features/sandra/sandra.module').then((m) => m.SandraModule),
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('src/app/features/teams/teams.module').then((m) => m.TeamsModule),
  },
  {
    path: 'partners',
    loadChildren: () =>
      import('src/app/features/partners/partners.module').then((m) => m.PartnersModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
