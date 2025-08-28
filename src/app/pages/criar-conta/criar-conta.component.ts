import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-criar-conta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './criar-conta.component.html',
  styleUrl: './criar-conta.component.scss'
})
export class CriarContaComponent {
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required]],
      telefone: [''],
      termos: [false, [Validators.requiredTrue]]
    }, { validators: this.passwordsMatch });
  }

  passwordsMatch(group: FormGroup) {
    const s = group.get('senha')?.value;
    const c = group.get('confirmarSenha')?.value;
    return s === c ? null : { notMatching: true };
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;
    const payload = { ...this.form.value } as any;
    delete payload.confirmarSenha;
    // TODO: conectar com serviço de cadastro
    console.log('Cadastro:', payload);
    // navega para login após cadastro (exemplo)
    this.router.navigate(['/login']);
  }

}
