import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-construcao-pages',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './construcao-pages.component.html',
  styleUrl: './construcao-pages.component.scss'
})
export class ConstrucaoPagesComponent {
  constructor(private router: Router) {}
  voltarHome(){ this.router.navigate(['/']); }
}
