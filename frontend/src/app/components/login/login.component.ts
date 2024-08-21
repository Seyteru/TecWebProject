import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private authService = inject(AuthenticationService);
  private router = inject(Router);
  errorMsg = 'Wrong Credentials';

  loginForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  });

  onSubmit(){
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      success => {
        if(success){
          this.router.navigateByUrl("/home");
        } else{
          alert("Login Error. Check Credentials");
        }
      },
      error => {
        console.error("Login Error", error);
        alert("Login Error");
      }
    )
  }
}
