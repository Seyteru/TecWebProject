import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgClass } from '@angular/common';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  checked: boolean = false;
  errorMsg: string = '';

  private router = inject(Router);
  private authService = inject(AuthenticationService);
  private formBuilder = inject(FormBuilder);
  private dialog = inject(MatDialog);

  constructor(){
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      retypePassword: ['', Validators.required],
      role: ['']
    },
  {
    validators: this.passwordsMatchValidator
  });
  }

  passwordsMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const retypePassword = control.get('retypePassword');

    if (password && retypePassword && password.value !== retypePassword.value) {
      return { 'passwordsMatchValidator': true };
    }
    return null;
  }

  onSubmit(){
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.value).subscribe({
        next: () => {
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'Success',
              content: 'Successfully Created a new User!'
            },
            width: '250px',
            enterAnimationDuration: '500ms',
            exitAnimationDuration: '500ms'
          });
          this.router.navigate(['/home']);
        },
        error: () => {
          this.errorMsg = 'Invalid Username/Password or Username already exists!';
        }
      });
    }
  }
}
