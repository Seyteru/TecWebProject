import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMsg: string = '';

  private router = inject(Router);
  private authService = inject(AuthenticationService);
  private formBuilder = inject(FormBuilder);
  private dialog = inject(MatDialog);

  constructor(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          this.dialog.open(AlertDialogComponent, {
            width: '250px',
            enterAnimationDuration: '500ms',
            exitAnimationDuration: '500ms'
          });
          this.router.navigate(['/home']);
        },
        error: () => {
          this.errorMsg = 'Invalid Username or Password';
        }
      });
    }
  }
}
