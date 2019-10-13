import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public question = 'The first probe to land on Mars, Viking 1, landed there in what year?';
  public correctAnswer = '1976';
  public lowerBound = 1975;
  public upperBound = 1975;
  public currentValue: any;

  constructor() {
    this.currentValue = {
      lower: 1950,
      upper: 1950
    };
  }

  onRangeChange() {
    this.lowerBound = this.currentValue.lower;
    this.upperBound = this.currentValue.upper;
  }

}
