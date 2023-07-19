import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppLoginService {
  private isAuth$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    const token = localStorage.getItem('token');
    if (token) {
      this.isAuth$.next(true);
    }
  }

  login() {
    localStorage.setItem('token', 'ij4gnrijrtnfweklmrfoe');
    this.isAuth$.next(true);
    this.router.navigate(['/youtube']);
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuth$.next(false);
    this.router.navigate(['/auth']);
    console.log('logout');
  }

  isAuthenticated() {
    return this.isAuth$.asObservable();
  }
}
