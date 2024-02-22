import { Component } from '@angular/core';
import { HistoricalEra } from '../models/historicalEras.model'; // Import the missing module

@Component({
  selector: 'app-german-history',
  templateUrl: './german-history.component.html',
  styleUrls: ['./german-history.component.css']
})
export class GermanHistoryComponent {
  historicalEras: HistoricalEra[] = [
    {
      title: 'The Holy Roman Empire',
      period: '800–1806',
      description: 'A complex of territories in central Europe...'
    },
    {
      title: 'German Confederation and Empire',
      period: '1815–1918',
      description: 'Following the fall of the Holy Roman Empire...'
    },
    // Add more eras as needed
  ];
  learnMoreAboutEra(era: HistoricalEra): void {
    console.log(`Learning more about: ${era.title}`);
    // Implement navigation or further information retrieval here
  }
}
