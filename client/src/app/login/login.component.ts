import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder, private router: Router,private auth: AuthService) {
  }
  ngOnInit(): void {
    this.Form();
  }
  logInForm!: FormGroup;
  Form() {
    this.logInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  goToRegister(){
    this.router.navigate(['/register'])
  }

  Login() {
    if (this.logInForm.valid) {
      const userData = this.logInForm.value;
      this.auth.logIn(userData).subscribe({
        next: (response: any) => {
          const jwtToken = response;
          localStorage.setItem('token', jwtToken);
          console.log('Signed in successfully! ', response);
          alert('you signed ined successfully')
          this.router.navigate(['/books']);
        },
        error: (error) => {
          console.log('login failed: ', error);
          if (error.status === 500) {
            console.log('error occured!');
          } else {
            console.log('Unexpected error!');
          }
        }
      })
    }
  }

  
  
}
