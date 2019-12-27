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
  Responses: Response[];

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

export class Hero {
  Id: number;
  Mail: string;
  GivenName: string;
  Surname: string;
  FriendlyName: string;
  DateJoined: Date;
  Status: string;
  OrgId: number;
  Assessments: Assessment[];
  Questions: Question[];
  Responses: Response[];
}

export class Assessment {
  Id: number;
  AssessmentName: string;
  Questions: Question[];
  Responses: Response[];
  questionOrder: string;
  Heroes: Hero[];
  CreatedOn: Date;
}
