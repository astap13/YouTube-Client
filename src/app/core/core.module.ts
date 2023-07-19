import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { SortComponent } from '../youtube/components/sort/sort.component';
import { AccountComponent } from './component/account/account.component';
import { HeaderComponent } from './component/header/header.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [AccountComponent, SortComponent, HeaderComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  exports: [HeaderComponent],
})
export class CoreModule {}
