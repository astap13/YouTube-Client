import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreComponent } from './core/core.component';
import { CoreModule } from './core/core.module';
import { personalCardReducer } from './redux/reducers/personal.reducer';
import { YoutubeComponent } from './youtube/youtube.component';
import { YoutubeModule } from './youtube/youtube.module';

@NgModule({
  declarations: [AppComponent, CoreComponent, YoutubeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    YoutubeModule,
    CoreModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({ personalCards: personalCardReducer }),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
