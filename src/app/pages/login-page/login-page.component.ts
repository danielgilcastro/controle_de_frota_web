import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { LoginService } from '../../service/login.service';


@Component({
  selector: 'app-login-page',
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm: FormGroup;
  errorMessage = '';
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    
  ) {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(){
    if(this.loginForm.invalid){
      this.errorMessage = 'Preencha todos os campos corretamente';
      return;
    }

    const {login, password} = this.loginForm.value;
    this.loginService.login(login, password).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/tela-inicial'])
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Falha ao logar.'
      }
    })
  }
}
