import { Component, OnInit } from '@angular/core';
import { ScreeningComponent } from '../screening/screening.component';
@Component({
  selector: 'app-candidate-assessment-summary',
  templateUrl: './candidate-assessment-summary.component.html',
  styleUrls: ['./candidate-assessment-summary.component.css']
})
export class CandidateAssessmentSummaryComponent implements OnInit {

  toggle = false;
  pass = false;
  fail = false;
  violations: string[] = ["Profanity", "Not dressed"];
  showViolationForm = false;
  prompt = false;
  softSkillsConfirmed = false;
  choice: string;
  constructor(private screening: ScreeningComponent) { 
    if(screening.finished)
      this.toggle = true;
  }

  ngOnInit() {
  }

  toggleViolationForm(yesNo){
    if(yesNo == 'Y'){
      this.showViolationForm = true;
      this.fail = true;
      this.pass = false;
    }
    else{
      this.prompt = true;
      this.fail = false;
      this.pass = true;
    }
      
  }
  togglePrompt(yesNo){
    if(yesNo == 'Y'){
      this.prompt = true;
      this.showViolationForm = false;
    } else{
      this.fail = false;
      this.showViolationForm = false;
    }
    
  }
  confirmSoftSkills(yesNo){
    if(yesNo == 'Yes'){
      this.prompt = false;
      this.softSkillsConfirmed = true;
    } else{
      if(this.pass){
        this.pass = false;
        this.prompt = false;
      } else if(this.fail){
        this.fail = false;
        this.prompt = false;
        this.showViolationForm = true;
      }
    }
  }
  hide() {
    this.toggle = true;
    this.screening.finished = false;
    
  }

  onSubmit() {

    //leave this at the end
     this.hide();
  }
}
