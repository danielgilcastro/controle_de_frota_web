import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {
  open = false;
  user: User | null = null;


  constructor(private userService: UserService, private router: Router) {
    this.userService.user$.subscribe(u => { this.user = u; });
  }

  toggle() { this.open = !this.open; }

  logout() {
    this.userService.logout();
    this.open = false;
    this.router.navigate(['/login']);
  }

  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (!target.closest('.user-menu') && this.open) { this.open = false; }
  }
}
