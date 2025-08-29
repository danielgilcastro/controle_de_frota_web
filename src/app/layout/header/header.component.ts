import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SidebarService } from '../sidebar/sidebar.service';
import { LoginService } from '../../service/login.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   user: any = null;
  constructor(public sidebar: SidebarService, private router: Router, private loginService: LoginService) {}

  // controla abertura do campo de pesquisa em mobile
  searchOpen = false;

    ngOnInit(): void {
    this.user = this.loginService.getUser();
  }

  
  toggleSearch() { this.searchOpen = !this.searchOpen; }
  
  // toggle called from mobile button: if opening, focus input; if already open, submit
  toggleSearchMobile(searchInput?: HTMLInputElement) {
    if (!this.searchOpen) {
      this.searchOpen = true;
      setTimeout(() => searchInput?.focus(), 20);
    } else {
      this.submitSearch();
    }
  }
  
  // search field state
  searchValue = '';

  // inject router to navigate with query param
  // (constructor updated below)

  clearSearch() { this.searchValue = ''; }

  submitSearch() {
    const q = (this.searchValue || '').trim();
    // navigate to current route with ?q=... for a simple search behavior
    this.router.navigate([], { queryParams: { q: q || null }, queryParamsHandling: 'merge' });
  }

  onSearchKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.submitSearch();
    } else if (event.key === 'Escape') {
      this.searchOpen = false;
    }
  }

  // alterna comportamento: em mobile esconder/mostrar; em desktop colapsar
  toggleSidebar() {
    const w = window.innerWidth;
  console.log('Header.toggleSidebar invoked, width=', w, 'hiddenValue=', this.sidebar.hiddenValue, 'collapsedValue=', this.sidebar.collapsedValue);
    if (w <= 768) {
      // mobile: alterna hidden
      if (this.sidebar.hiddenValue) this.sidebar.show(); else this.sidebar.hide();
    } else {
      // desktop: alterna collapsed
  console.log('Header.toggleSidebar -> toggling collapsed');
      this.sidebar.toggle();
    }
  }
  hideSidebar() { this.sidebar.hide(); }
  showSidebar() { this.sidebar.show(); }

    logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}

