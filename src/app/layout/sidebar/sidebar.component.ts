import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from './sidebar.service';

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	constructor(public sidebar: SidebarService) {}

	ngOnInit(): void {
		// Guarantee sidebar is shown on desktop (helps when localStorage stored hidden)
		if (!this.isMobile) {
			this.sidebar.show();
		}
	}

	closeIfMobile() {
		if (this.isMobile) this.sidebar.hide();
	}

	get isMobile() {
		return window.innerWidth <= 768;
	}
}

