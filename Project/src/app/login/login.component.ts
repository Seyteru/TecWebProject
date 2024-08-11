import { Component } from '@angular/core';
import { FormsModule, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit(){
    alert(`Username: ${this.loginForm.value.username} Password: ${this.loginForm.value.password}`);
  }

}