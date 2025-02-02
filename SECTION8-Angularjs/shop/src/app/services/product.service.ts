import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  path = 'http://localhost:3000/products';

  getProducts(categoryId): Observable<Product[]> {
    let newPath = this.path;
    if (categoryId) {
      newPath = newPath + '?categoryId=' + categoryId;
    }

    console.log(categoryId);
    return this.http.get<Product[]>(newPath).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage =
        'Something went wrong. Error message = ' + err.error.message;
    } else {
      errorMessage = 'Systematic error !';
    }
    return throwError(errorMessage);
  }
}
