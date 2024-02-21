import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GermanAudiobooksComponent } from './german-audiobooks/german-audiobooks.component';
import { GermanHistoryComponent } from './german-history/german-history.component';
import { GermanTagebuchComponent } from './german-tagebuch/german-tagebuch.component';
import { AboutComponent } from './about/about.component';
import { GermanMusicComponent } from './german-music/german-music.component';
import { FortschrittsanzeigeComponent } from './fortschrittsanzeige/fortschrittsanzeige.component';
import { PodcastUeberblickComponent } from './podcast-overview/podcast-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    FortschrittsanzeigeComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    GermanMusicComponent,
    GermanAudiobooksComponent,
    GermanHistoryComponent,
    GermanTagebuchComponent,
    AboutComponent,
    PodcastUeberblickComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
