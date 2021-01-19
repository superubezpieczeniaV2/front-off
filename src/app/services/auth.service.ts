import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../data/models/User';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>
  public currentUser: Observable<User>

  public isLoggedIn = new BehaviorSubject<boolean>(false)
  public username = new BehaviorSubject<any>('')
  public role = new BehaviorSubject<any>('')

  constructor(private http: HttpClient,
              private router: Router) 
  { 
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('token')))
      this.currentUser = this.currentUserSubject.asObservable()
  }

  get LoggedInUser() {
    return this.isLoggedIn.asObservable()
  }

  get usernameIs() {
      return this.username.asObservable()
  }

  get userRole() {
      return this.role.asObservable()
  }

  public get currentUserValue() : User 
  {
      return this.currentUserSubject.value
  }

  public LoginUser = (username: String, password: String) => {
    return this.http.post<any>(`${environment.apiUrl}/Authenticate/login`, 
    {
      username,
      password
    }).pipe(map(user => {
      sessionStorage.setItem('token', JSON.stringify(user))
      this.currentUserSubject.next(user)
      this.isLoggedIn.next(true)
      this.role.next(sessionStorage.setItem('role', user.userRoles))

      if (sessionStorage.getItem('role') == 'Admin') {
        window.location.href = '/admin'
      } else {
        window.location.href = '/user'
      }       
      return user
    }))
  }

  logoutUser = () => {
    localStorage.removeItem('token')
    this.currentUserSubject.next(null)
    this.isLoggedIn.next(null)
    this.username.next(null)
    this.router.navigate(['/']);
  }
}
