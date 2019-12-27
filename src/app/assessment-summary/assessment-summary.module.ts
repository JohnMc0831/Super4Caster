import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AssessmentSummaryPage } from './assessment-summary.page';

const routes: Routes = [
  {
    path: '',
    component: AssessmentSummaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AssessmentSummaryPage]
})
export class AssessmentSummaryPageModule {}
