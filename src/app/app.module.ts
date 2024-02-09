import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FortschrittsanzeigeComponent } from './fortschrittsanzeige/fortschrittsanzeige.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GermanMusicComponent } from './german-music/german-music/german-music.component';
import { GermanAudiobooksComponent } from './german-audiobooks/german-audiobooks.component';
import { GermanHistoryComponent } from './german-history/german-history.component';
import { GermanTagebuchComponent } from './german-tagebuch/german-tagebuch.component';
import { AboutComponent } from './about/about.component';

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
    AppRoutingModule,
    MatProgressBarModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
