import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, Input } from '@angular/core';
import { response } from 'express';
import { catchError, throwError } from 'rxjs';
import { AppError } from './common/app-error';
import { BadAuthorization } from './common/bad-authorization';
import { BadInput } from './common/bad-input';
import { NotFoundError } from './common/not-found.error';


export const MY_TOKEN = new InjectionToken<string>('MyToken');

@Injectable({
  providedIn: 'root',
  useValue: MY_TOKEN
})
export class DataService {
  //@Input() private url: string = '';
  
  constructor(
    private url: string, 
    private http: HttpClient   
    ) { }
  

  getAll() {
    return this.http.get(this.url)
      // .pipe(         
      //     catchError(this._handleError?.handleError!)
      // );
  }

  delete(id: string) {
    return this.http.get(this.url + '/' + id).pipe(catchError(this.handleError));
  }

  update(resource:any) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
      .pipe(       
        catchError(this.handleError)
      );
  }

  create(resource:any) {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(        
        catchError(this.handleError)
      );
  }

  //Response é uma interface que busca dados via um request http
  private handleError(err: Response) {
    if(err.status === 400) 
      return throwError(() => new BadInput(err));

    if(err.status === 404)             
      return throwError(() => new NotFoundError());  
      
    if(err.status === 401)
      return throwError(() => new BadAuthorization());

    return throwError(() => new AppError(err));
  }

}
