import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tela-erro404',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tela-erro404.component.html',
  styleUrl: './tela-erro404.component.scss'
})
export class TelaErro404Component {
  /** tipo: 'notfound' | 'offline' | 'timeout' */
  @Input() tipo: string | null = null;
  @Input() mensagem: string | null = null;

  constructor(private router: Router) {}

  voltarHome() { this.router.navigate(['/']); }
  tentarNovamente() { window.location.reload(); }
}
