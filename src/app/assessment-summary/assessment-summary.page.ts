import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CasterService } from '../services/caster.service';
import { Assessment, Question } from '../models/models';

@Component({
  selector: 'app-assessment-summary',
  templateUrl: './assessment-summary.page.html',
  styleUrls: ['./assessment-summary.page.scss'],
})
export class AssessmentSummaryPage implements OnInit {
  public assessment: Assessment;
  public questions: Question[] = [];
  public numQuestions: number;

  constructor(public modal: ModalController, public navParams: NavParams, public caster: CasterService) {
    const that = this;
    const assessId: number = this.navParams.get("assessId");
    this.caster.getAssessmentById(assessId).subscribe((assess: Assessment) => {
      this.assessment = assess;
      const questionIds = assess.questionOrder.split(',');
      questionIds.forEach((q) => {
        this.caster.getQuestionById(+q).subscribe((question: Question) => {
          that.questions.push(question);
        });
      });
    });
   }

  ngOnInit() {

  }
}