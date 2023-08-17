import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {ApiComponent} from "./views/api/api.component";
import {BasicsComponent} from "./views/basics/basics.component";

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
    title: 'Home'
  },
  {
    component: ApiComponent,
    path: 'api',
    title: 'API'
  },
  {
    component: BasicsComponent,
    path: 'basics',
    title: 'Basics'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
