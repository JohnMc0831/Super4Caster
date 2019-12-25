import { Component } from '@angular/core';
import { Assessment, Question, Response, Hero } from '../models/models';
import { CasterService } from '../services/caster.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public assessments: Assessment[];

  constructor(public caster: CasterService) {
    this.caster.getAssessmentsForHero("johnmc0831@gmail.com").subscribe((assessments) => {
      this.assessments = assessments;
    });
  }
}
