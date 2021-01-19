import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { first, map } from 'rxjs/operators'
import { TypeInsurance } from '../data/models/TypeInsurance';

@Injectable({
  providedIn: 'root'
})
export class TypeInsuranceService {

  constructor(private http: HttpClient) { }
  

  public getAll () : Observable<Object> {
    return this.http.get<any>(`${environment.apiUrl}/TypeInsurance`)
  }

  public createTypeInsurance (type, price) {
    return this.http.post<any>(`${environment.apiUrl}/TypeInsurance`, {
      type,
      price
    }).subscribe(res => {
      console.log(res),
      (e) => console.log(e)
    })
  }

  public removeTypeInsurance (id) {
    this.http.delete(`${environment.apiUrl}/TypeInsurance/${id}`)
    .subscribe(res => {
      console.log(res)
      window.location.href = '/admin',
      (e) => console.log(e)
    })
  }
}
