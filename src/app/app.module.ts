import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
