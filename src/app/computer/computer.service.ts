
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Computer } from './computer';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  private apiURL = "http://localhost:8000/api/computer/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Computer[]> {
   return this.httpClient.get<Computer[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(computer): Observable<Computer> {
   return this.httpClient.post<Computer>(this.apiURL, JSON.stringify(computer), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Computer> {
   return this.httpClient.get<Computer>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, computer): Observable<Computer> {
   return this.httpClient.put<Computer>(this.apiURL + id, JSON.stringify(computer), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Computer>(this.apiURL + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }

}