import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PfSheetCreatorComponent } from './pathfinder/sheet-creator/sheet-creator.component';
import { PfSheetDetailsComponent } from './pathfinder/sheet-details/sheet-details.component';
import { NhSheetCreatorComponent } from './naheulbeuk/sheet-creator/sheet-creator.component';
import { NhSheetDetailsComponent } from './naheulbeuk/sheet-details/sheet-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pathfinder/create',
    component: PfSheetCreatorComponent
  },
  {
    path: 'pathfinder/details/:id',
    component: PfSheetDetailsComponent
  },
  {
    path: 'naheulbeuk/create',
    component: NhSheetCreatorComponent
  },
  {
    path: 'naheulbeuk/details/:id',
    component: NhSheetDetailsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
