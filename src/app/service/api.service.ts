import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "/api";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client side/Network error
      console.error('An Error Occured: ', error.error.message);
    } else {
      // Backend returned an unsuccessful response code
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // Returns an observable with user-facing error message
    return throwError('Something bad happenned; please try again later');
  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getCharacters(): Observable<any> {
    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.errorHandler));
  }

  getCharacterById(id: string): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.errorHandler));
  }

  uploadCharacter(data): Observable<any> {
    return this.http.post(apiUrl, data, httpOptions).pipe(
      catchError(this.errorHandler)
    );
  }

  updateCharacter(id: string, data): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, data, httpOptions).pipe(
      catchError(this.errorHandler)
    );
  }

  deleteCharacter(id: string): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url, httpOptions).pipe(
      catchError(this.errorHandler)
    );
  }
}
