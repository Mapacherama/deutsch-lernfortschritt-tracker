// src/app/german-music/german-music.component.ts

import { Component, OnInit } from '@angular/core';
import { SpotifyPlaylist } from '../models/spotify-playlist.model';

@Component({
  selector: 'app-german-music',
  templateUrl: './german-music.component.html',
  styleUrls: ['./german-music.component.css']
})
export class GermanMusicComponent implements OnInit {
  playlists: SpotifyPlaylist[] = [
    {
      id: '1',
      name: 'German Pop Hits',
      description: 'The latest hits from the German pop scene.',
      spotifyLink: 'https://open.spotify.com/playlist/yourplaylistlink1'
    },
    {
      id: '2',
      name: 'German Classics',
      description: 'Classic tunes from Germany.',
      spotifyLink: 'https://open.spotify.com/playlist/yourplaylistlink2'
    },
    // Add more playlists as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
