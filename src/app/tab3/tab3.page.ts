import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public question = 'A hockey puck will fit in a golf hole.';
  public correctAnswer = false;
  public confidenceLevel = [50, 60, 70, 80, 90, 95, 100];
  public currentAnswer: boolean;
  public helpText: string;


  constructor() {}

  flipAnswer() {
    if (this.currentAnswer) {
      $('#helpText').html('The statement is <ion-text color="primary">TRUE</ion-text>.');
    } else {
      $('#helpText').html('The statement is <ion-text color="danger">FALSE</ion-text>.');
    }
  }

}
