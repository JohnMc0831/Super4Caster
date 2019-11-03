import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { catchError, tap } from 'rxjs/operators';
import { Question, Response } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CasterService {
  baseUrl = 'http://localhost:4200';

  constructor(private  httpClient: HttpClient) { }

  // GET
  public getQuestionbyId(questionId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/api/question/${questionId}`)
    .pipe(
      tap(_ => console.log('queried for a question by id...')),
      catchError(this.handleError('getQuestionById'))
      );
  }

  // POST
  public postResponse(response: Response) {
    return this.httpClient.post(`${this.baseUrl}/api/response`, response)
    .pipe(
      tap(_ => console.log(`posted response ${response.value}...`)),
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
