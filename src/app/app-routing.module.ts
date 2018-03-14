import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreeningComponent } from './components/screening/screening.component';
import { CandidatesScreeningListComponent } from './components/candidates-screening-list/candidates-screening-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/candidates', pathMatch: 'full' },
  { path: 'screening', component: ScreeningComponent },
  { path: 'candidates', component: CandidatesScreeningListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
