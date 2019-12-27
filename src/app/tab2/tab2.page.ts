import { Component } from '@angular/core';
import { Assessment, Question, Response, Hero } from '../models/models';
import { CasterService } from '../services/caster.service';
import * as moment from 'moment';
import { ModalController } from '@ionic/angular';
import { AssessmentSummaryPage } from '../assessment-summary/assessment-summary.page';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public assessments: Assessment[];

  constructor(public caster: CasterService, public modal: ModalController) {
    this.caster.getAssessmentsForHero("johnmc0831@gmail.com").subscribe((assessments: Assessment[]) => {
      this.assessments = assessments;
    });
  }

  showPrettyDate(theDate) {
    return moment(theDate).format('MM/DD/YYYY');
  }

  async takeAssessment(e) {
    console.log('inside takeAssessment.');
      const modal = await this.modal.create({
        component: AssessmentSummaryPage,
        componentProps: {
          assessId: e
        }
      });

      return await modal.present();
    }
  }
