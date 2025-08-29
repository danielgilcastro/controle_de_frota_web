import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SidebarService } from '../sidebar/sidebar.service';
import { UserMenuComponent } from '../../core/user-menu/user-menu.component';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [CommonModule, FormsModule, RouterModule, UserMenuComponent],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	// controla abertura do campo de pesquisa
	searchOpen = false;
	searchValue = '';

	constructor(public sidebar: SidebarService, private router: Router) {}

		// header no longer toggles the sidebar; sidebar has its own controls

	// pesquisa
	toggleSearch(searchInput?: HTMLInputElement) {
		if (!this.searchOpen) {
			this.searchOpen = true;
			// foca após animação curta
			setTimeout(() => searchInput?.focus(), 120);
		} else {
			this.submitSearch();
		}
	}

	submitSearch() {
		const q = (this.searchValue || '').trim();
		this.router.navigate([], { queryParams: { q: q || null }, queryParamsHandling: 'merge' });
	}

	onSearchKey(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			this.submitSearch();
		} else if (event.key === 'Escape') {
			this.searchOpen = false;
		}
	}

	// utilitárias expostas (caso sejam usadas por outros templates)
	hideSidebar() { this.sidebar.hide(); }
	showSidebar() { this.sidebar.show(); }
}

