import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule],
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

  constructor(){
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['']
    });
  }

  onSubmit(){
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.value).subscribe({
        next: () => {
          alert(this.registerForm.get('role')?.value);
          this.router.navigate(['/home']);
        },
        error: () => {
          this.errorMsg = 'Invalid Username/Password or Username already exists!';
        }
      });
    }
  }
}
