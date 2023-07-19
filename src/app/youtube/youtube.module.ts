import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { SearchItemComponent } from './components/search-item/search-item.component';
import { BorderColorDirective } from './directives/border-color.directive';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { DetealedPageComponent } from './pages/detealed-page/detealed-page.component';
import { SearchResultComponent } from './pages/search-results/search-result.component';
import { SortPipe } from './pipes/sort.pipe';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [
    SearchItemComponent,
    BorderColorDirective,
    SortPipe,
    SearchResultComponent,
    DetealedPageComponent,
    AdminPageComponent,
  ],
  imports: [
    YoutubeRoutingModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [SearchResultComponent],
})
export class YoutubeModule {}
