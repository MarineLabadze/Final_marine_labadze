import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isDirty() {
    throw new Error('Method not implemented.');
  }
  constructor(private fb: FormBuilder, private auth: AuthService,private router: Router) { }

  registrationForm!: FormGroup;
  formDirty = false;

  ngOnInit(): void {
    this.Form();
    this.registrationForm.valueChanges.subscribe(() => this.formDirty = true);
    this.registrationForm.valueChanges.subscribe(() => this.formDirty = true);
  }

  Form() {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  Register() {
    const userData = this.registrationForm.value;
    if (this.registrationForm.valid) {
      this.auth.register(userData).subscribe({
        next: (response) => {
          console.log('Registered successfully! ',response)
          alert('you signed ined successfully')
          this.router.navigate(['/login'])
        },
        error: (error) => {
          console.log('error occured during registering! ',error);
        }
      });
    }
  }
  login(){
    this.router.navigate(['/login'])
  }
}

