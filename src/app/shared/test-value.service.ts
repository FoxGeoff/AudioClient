import { Injectable } from '@angular/core';
//
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { TestValue } from '../interface/test-value';

@Injectable({
  providedIn: 'root'
})
export class TestValueService {
  private TestValuesUrl = 'api/testValues';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a QuizService message with the QuizService */
  private log(message: string) {
    this.messageService.add(`MessageService: ${message}`);
  }

  /* Old function for mock Quizs
  getQuizes(): Observable<Quiz[]> {
    return of(QuizES);
  }
  */

  /** GET Quizes from the server */
  getTestValues(): Observable<TestValue[]> {
    // TODO: send the message _after_ fetching the Quizes
    this.messageService.add('TestValueService: fetched TestValues');

    return this.http.get<TestValue[]>(this.TestValuesUrl).pipe(
      tap(TestValues => this.log('fetched TestValues')),
      catchError(this.handleError('getTestValue', []))
    );
  }

  /** GET Quiz by id. Will 404 if id not found */
  getTestValue(id: number): Observable<TestValue> {
    const url = `${this.TestValuesUrl}/${id}`;
    return this.http.get<TestValue>(url).pipe(
      tap(_ => this.log(`fetched testValue id=${id}`)),
      catchError(this.handleError<TestValue>(`getTestValue id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
