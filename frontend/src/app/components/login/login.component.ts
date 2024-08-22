import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  private router = inject(Router);
  private authService = inject(AuthenticationService);
  private tokenService = inject(TokenService);

  isLoggedIn = false;
  isLoginFailed = false;
  errorMsg = 'Wrong Credentials';
  roles: string[] = [];

  loginForm: any = {
    username: null,
    password: null
  }

  ngOnInit(){
    if(this.tokenService.getToken()){
      this.roles = this.tokenService.getUser().roles;
    }
  }

  onSubmit(){
    const { username, password } = this.loginForm
    this.authService.login({ username, password }).subscribe({
      next: params => {
        this.tokenService.saveToken(params.accessToken);
        this.tokenService.saveUser(params);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenService.getUser().roles;
        this.router.navigate(['/home']);
      },
      error: error => {
        this.errorMsg = error.error.message;
        this.isLoginFailed = true;
      }
    });
  }
}
