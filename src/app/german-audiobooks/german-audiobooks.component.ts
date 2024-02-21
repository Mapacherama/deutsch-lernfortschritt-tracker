// src/app/german-audiobooks/german-audiobooks.component.ts

import { Component, OnInit } from '@angular/core';
import { Audiobook } from '../models/audiobook.model';

@Component({
  selector: 'app-german-audiobooks',
  templateUrl: './german-audiobooks.component.html',
  styleUrls: ['./german-audiobooks.component.css']
})
export class GermanAudiobooksComponent implements OnInit {
  audiobooks: Audiobook[] = [
    {
      id: '1',
      title: 'Der Audiobook Titel 1',
      author: 'Autor 1',
      description: 'Eine kurze Beschreibung des Audiobooks 1.',
      link: 'https://linktoaudiobook1.com'
    },
    {
      id: '2',
      title: 'Der Audiobook Titel 2',
      author: 'Autor 2',
      description: 'Eine kurze Beschreibung des Audiobooks 2.',
      link: 'https://linktoaudiobook2.com'
    },
    // Add more audiobooks as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
