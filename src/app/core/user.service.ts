import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  /** role example: 'motorista' | 'despachante' */
  role?: string;
  matricula?: string;
  lotacao?: string;
  funcao?: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly storageKey = 'cf_current_user_v1';
  private subject = new BehaviorSubject<User | null>(this.load());

  get user$(): Observable<User | null> { return this.subject.asObservable(); }
  get snapshot(): User | null { return this.subject.getValue(); }

  update(patch: Partial<User>) {
  const base = this.snapshot || { id: '1', name: 'Usuário', email: 'usuario@exemplo.com', avatarUrl: '/logotras.png', role: 'motorista', matricula: '', lotacao: '', funcao: '' };
    const next: User = { ...base, ...patch };
    try { localStorage.setItem(this.storageKey, JSON.stringify(next)); } catch {}
    this.subject.next(next);
  }

  logout() {
    try { localStorage.removeItem(this.storageKey); } catch {}
    this.subject.next(null);
  }

  private load(): User | null {
    try {
      const raw = localStorage.getItem(this.storageKey);
      return raw ? JSON.parse(raw) as User : null;
    } catch {
      return null;
    }
  }
}
