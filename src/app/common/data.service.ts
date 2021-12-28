import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-errors';
import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url, private http: HttpClient) { }

  public getAll() {
    return this.http.get<any>(this.url).pipe(catchError(this.handleError));
  }

  public create(resource){
    return this.http.post<any>(this.url,JSON.stringify(resource)).pipe(catchError(this.handleError));
  }

  public update(resource) {
    return this.http.patch(this.url+'/'+ resource.id, JSON.stringify({isRead: true})).pipe(catchError(this.handleError));
    // this.http.put(this.url+'/'+post.id,JSON.stringify(resource)); construct resource first{}
  }

  public delete(id) {
    return this.http.delete(this.url+'/' +id).pipe(catchError(this.handleError));
  }
  
  private handleError(error: Response) {
    if (error.status === 400) 
         return throwError(new BadInput(error.json()));

    if (error.status === 404) 
         return throwError(new NotFoundError());

    return throwError(new AppError(error));
  }
  }
