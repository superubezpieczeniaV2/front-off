import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MethodUseService {

  constructor(public http: HttpClient) { }

  public getAll () : Observable<Object> {
    return this.http.get<any>(`${environment.apiUrl}/MethodUse`)
  }

  public removeMethodUse (id) {
    this.http.delete(`${environment.apiUrl}/MethodUse/${id}`)
    .subscribe(res => {
      console.log(res)
      window.location.href = '/admin',
      (e) => console.log(e)
    })
  }
}
