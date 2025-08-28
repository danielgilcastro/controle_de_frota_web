import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarService implements OnDestroy {
  // true = collapsed (estreito), true = hidden (não visível em tela)
  private _collapsed$ = new BehaviorSubject<boolean>(false);
  private _hidden$ = new BehaviorSubject<boolean>(false);
  private resizeSub: Subscription | null = null;

  // breakpoint para comportamento mobile
  private mobileBreakpoint = 768;
  private storageKey = 'sidebar-hidden';

  constructor() {
    // restaurar estado de hidden do storage (se existir)
    const stored = localStorage.getItem(this.storageKey);
    if (stored === 'true') {
      this._hidden$.next(true);
    }

    // escutar resize para comportamento responsivo
    this.resizeSub = fromEvent(window, 'resize').subscribe(() => this.onResize());
    // executar uma vez
    this.onResize();
  }

  ngOnDestroy(): void {
    this.resizeSub?.unsubscribe();
  }

  // Observables
  get collapsed$() { return this._collapsed$.asObservable(); }
  get hidden$() { return this._hidden$.asObservable(); }

  // getters síncronos úteis para decisões rápidas
  get collapsedValue() { return this._collapsed$.value; }
  get hiddenValue() { return this._hidden$.value; }

  // ações
  toggle() { const next = !this._collapsed$.value; this._collapsed$.next(next); }
  show() { this._hidden$.next(false); localStorage.setItem(this.storageKey, 'false'); }
  hide(persist = true) { this._hidden$.next(true); if (persist) localStorage.setItem(this.storageKey, 'true'); console.log('SidebarService.hide called, persist=', persist); }
  setCollapsed(value: boolean) { this._collapsed$.next(value); }

  // comportamento responsivo: se estiver em tela pequena, esconder automaticamente
  private onResize() {
    const w = window.innerWidth;
    if (w <= this.mobileBreakpoint) {
      // em mobile, ocultar sidebar por padrão (não persistir)
      this._hidden$.next(true);
    } else {
      // em desktop, restaurar segundo storage (ou mostrar)
      const stored = localStorage.getItem(this.storageKey);
      this._hidden$.next(stored === 'true');
    }
  }
}
