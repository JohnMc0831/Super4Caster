import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
import { catchError, tap } from 'rxjs/operators';
import { Question, Response } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CasterService {
  baseUrl = 'https://localhost:5001/api/caster';
  // baseUrl = '/api';

  constructor(private  httpClient: HttpClient) { }

  // GET
  public getQuestionById(questionId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/question/${questionId}`)
    .pipe(
      tap(_ => console.log('queried for a question by id...')),
      catchError(this.handleError('getQuestionById'))
      );
  }

  public getAssessmentsForHero(heroMail: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/assessments/${heroMail}`)
    .pipe(
      tap(_ => console.log(`queried for assessments for ${heroMail}`)),
      catchError(this.handleError('getAssessmentsForHero'))
    );
  }

  public getAssessmentById(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/assessments/id/${id}`)
    .pipe(
      tap(_ => console.log(`queried for assessment by Id ${id}`)),
      catchError(this.handleError('getAssessmentById'))
    );
  }

  // POST
  public postResponse(response: Response) {
    return this.httpClient.post(`${this.baseUrl}/response`, response)
    .pipe(
      tap(_ => console.log(`posted response ${response.LowerBoundInc}...`)),
      catchError(this.handleError('postResponse'))
      );
  }

  // Utility
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
