import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppLoginService } from 'src/app/auth/services/app-login.service';

import { AppShowItemsService } from '../../services/app-showItems.service';
import { AppShowSortService } from '../../services/app-showSort.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public showSortService: AppShowSortService,
    public showItemsService: AppShowItemsService,
    private router: Router,
    public loginService: AppLoginService,
  ) {}

  value: string = '';

  onSearch() {
    this.router.navigate(['/youtube']);
  }

  admin() {
    this.router.navigate(['/admin']);
  }

  toAuth() {
    this.router.navigate(['/auth']);
  }

  onValueChange(value: string) {
    this.showItemsService.search(value);
  }
}
