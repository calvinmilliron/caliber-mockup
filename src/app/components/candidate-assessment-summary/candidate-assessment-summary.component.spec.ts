import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateAssessmentSummaryComponent } from './candidate-assessment-summary.component';

describe('CandidateAssessmentSummaryComponent', () => {
  let component: CandidateAssessmentSummaryComponent;
  let fixture: ComponentFixture<CandidateAssessmentSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateAssessmentSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateAssessmentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
