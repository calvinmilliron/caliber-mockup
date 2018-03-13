import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreeningComponent } from './components/screening/screening.component';

const routes: Routes = [
  { path: '', redirectTo: '/screening', pathMatch: 'full' },
  { path: 'screening', component: ScreeningComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
