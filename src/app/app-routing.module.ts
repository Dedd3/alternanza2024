import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './modules/detail-page/detail-page/detail-page.component';

const routes: Routes = [
  {
    path: 'detailPage',
    component: DetailPageComponent,
    children:[],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
