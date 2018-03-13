import { Component, OnInit } from '@angular/core';
import { ScreeningComponent } from '../screening/screening.component';
@Component({
  selector: 'app-candidate-assessment-summary',
  templateUrl: './candidate-assessment-summary.component.html',
  styleUrls: ['./candidate-assessment-summary.component.css']
})
export class CandidateAssessmentSummaryComponent implements OnInit {

  show = false;
  constructor(private screening: ScreeningComponent) { 
    if(screening.finished)
      this.show = true;
  }

  ngOnInit() {
  }

  hide() {
    this.show = true;
    this.screening.finished = false;
  }

  onSubmit() {

    //leave this at the end
     this.hide();
  }
}
