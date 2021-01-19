import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeOwnerService {

  constructor(private http: HttpClient) { }

  public getAll () : Observable<Object> {
    return this.http.get<any>(`${environment.apiUrl}/TypeOwner`)
  }

  public removeTypeOwner (id) {
    this.http.delete(`${environment.apiUrl}/TypeOwner/${id}`)
    .subscribe(res => {
      console.log(res)
      window.location.href = '/admin',
      (e) => console.log(e)
    })
  }
}
