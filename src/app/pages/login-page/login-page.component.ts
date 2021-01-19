import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/data/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup
  loading = false
  submitted = false
  returnUrl: String
  error: ''

  user: User = new User()

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService

  ) { 

    if (this.authService.currentUserValue)
    {
      if (localStorage.getItem('role') == 'Admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user']);
      }  
    }
  }

  ngOnInit = () : void => 
  {
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
  }

  onSubmit() {
    this.submitted = true
    this.loading = true
    this.authService.LoginUser(this.user.username, this.user.password)
    .pipe(first())
    .subscribe(
      data => {
        console.log(data)
        this.router.navigate([this.returnUrl])
      },
      error => {
        this.error = error
        this.loading = false
        console.log(error)
      }
    )
  }

}
