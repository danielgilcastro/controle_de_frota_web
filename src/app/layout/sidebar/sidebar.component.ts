import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from './sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  constructor(public sidebar: SidebarService) {}

  // flags usadas nas bindings do template
  hidden = false;
  collapsed = false;

  ngOnInit(): void {
  this.subs.push(this.sidebar.hidden$.subscribe(v => { this.hidden = v; }));
  this.subs.push(this.sidebar.collapsed$.subscribe(v => { this.collapsed = v; }));
  }

  ngOnDestroy(): void { this.subs.forEach(s => s.unsubscribe()); }
}
