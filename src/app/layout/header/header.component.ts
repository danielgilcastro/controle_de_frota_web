import { Component } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public sidebar: SidebarService) {}

  // alterna comportamento: em mobile esconder/mostrar; em desktop colapsar
  toggleSidebar() {
    const w = window.innerWidth;
    if (w <= 768) {
      // mobile: alterna hidden
      if (this.sidebar.hiddenValue) this.sidebar.show(); else this.sidebar.hide();
    } else {
      // desktop: alterna collapsed
      this.sidebar.toggle();
    }
  }
  hideSidebar() { this.sidebar.hide(); }
  showSidebar() { this.sidebar.show(); }
}
