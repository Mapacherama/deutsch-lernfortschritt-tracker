// src/app/podcast-ueberblick/podcast-ueberblick.component.ts

import { Component, OnInit } from '@angular/core';
import { Podcast } from '../models/podcast.model';

@Component({
  selector: 'app-podcast-ueberblick',
  templateUrl: './podcast-overview.component.html',
  styleUrls: ['./podcast-overview.component.css']
})
export class PodcastUeberblickComponent implements OnInit {
  podcasts: Podcast[] = [
    {
      id: 1,
      name: 'German Podcast A',
      description: 'A deep dive into topics A.',
      host: 'Host A',
      releaseDate: new Date('2024-01-01')
    },
    {
      id: 2,
      name: 'German Podcast B',
      description: 'Exploring the intricacies of topic B.',
      host: 'Host B',
      releaseDate: new Date('2024-02-15')
    },
    // Add more podcasts as necessary
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
