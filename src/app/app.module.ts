import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ScreeningComponent } from './components/screening/screening.component';
import { AppRoutingModule } from './/app-routing.module';
import { CandidateAssessmentSummaryComponent } from './components/candidate-assessment-summary/candidate-assessment-summary.component';
import { CandidatesScreeningListComponent } from './components/candidates-screening-list/candidates-screening-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ScreeningComponent,
    CandidateAssessmentSummaryComponent,
    CandidatesScreeningListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
