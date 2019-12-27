import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentSummaryPage } from './assessment-summary.page';

describe('AssessmentSummaryPage', () => {
  let component: AssessmentSummaryPage;
  let fixture: ComponentFixture<AssessmentSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentSummaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
