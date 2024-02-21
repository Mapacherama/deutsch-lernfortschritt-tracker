import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GermanMusicComponent } from './german-music/german-music.component';
import { GermanAudiobooksComponent } from './german-audiobooks/german-audiobooks.component';
import { GermanHistoryComponent } from './german-history/german-history.component';
import { GermanTagebuchComponent } from './german-tagebuch/german-tagebuch.component';
import { AboutComponent } from './about/about.component';
import { PodcastUeberblickComponent } from './podcast-overview/podcast-overview.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'german-music', component: GermanMusicComponent },
  { path: 'german-audiobooks', component: GermanAudiobooksComponent },
  { path: 'german-history', component: GermanHistoryComponent },
  { path: 'german-tagebuch', component: GermanTagebuchComponent },
  { path: 'german-podcasts', component: PodcastUeberblickComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
