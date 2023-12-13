import { Injectable } from '@angular/core';
import {Invoice} from "../interfaces";
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  getAllInvoices(): Observable<Invoice[]>{
    return this.http.get<Invoice[]>('http://localhost:3000/invoices').pipe(catchError(this.handleError))
  }

  getInvoice(id: string): Observable<Invoice>{
    return this.http.get<Invoice>('http://localhost:3000/invoices/' + id).pipe(catchError(this.handleError))
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage:string;
    if (error.status === 0) {
      errorMessage = "A client-side or network error occurred. Please try again later.";
    } else if (error.status === 404 ){
      errorMessage = "There is no invoice with this id";
    }
    else if (error.status === 400 ){
      errorMessage = "Sorry, some error happens. Please try again later";
    }
    else if (error.status === 500 ){
      errorMessage = "Server Error";
    }
    return throwError(() => ({ message: errorMessage, status: error.status }));
  }
}
