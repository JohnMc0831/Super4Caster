import { NumericValueAccessor } from '@ionic/angular';

export class Question {
  Id: number;
  name: string;
  QuestionText: string;
  QuestionType: string;
  LowerBoundInt: number;
  UpperBoundInt: number;
  LowerBoundDec: number;
  UpperBoundDec: number;
  CorrectAnswerInc: number;
  CorrectAnswerDec: number;
  CorrectAnswerBin: number;
  Confidence: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Response {
    Id: number;
    QuestionId: number;
    LowerBoundInc: number;
    UpperBoundInc: number;
    LowerBoundDec: number;
    UpperBoundDec: number;
    BinaryResponse: number;
    RecordedAt: Date;
    SubmittedBy: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
