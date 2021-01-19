import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { APPMAINNAVADMINMOCKS } from 'src/app/data/mocks/AppMainNavAdminMocks';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {
  adminNavs$ = APPMAINNAVADMINMOCKS
  isLoggedIn$

  constructor(private authService: AuthService) { }

  ngOnInit()
  {
    this.isLoggedIn$ = sessionStorage.getItem('token')
  }

}
