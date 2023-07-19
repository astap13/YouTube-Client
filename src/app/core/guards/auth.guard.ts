import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AppLoginService } from 'src/app/auth/services/app-login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: AppLoginService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.loginService.isAuthenticated().pipe(
      take(1),
      map((isAuth) => {
        if (isAuth) {
          return true;
        } else {
          this.router.navigate(['/auth']);
          return false;
        }
      }),
    );
  }
}
