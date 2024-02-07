import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Beispiel Daten
  gelernteWoerter = 150;
  abgeschlosseneLektionen = 10;
  verbrachteLernzeit = '5 Stunden'; // Im realen Szenario, berechnen basierend auf tatsächlichen Daten
  fortschrittsStatistiken = {
    grammatik: 70, // Prozent
    wortschatz: 60, // Prozent
    aussprache: 80, // Prozent
  };

  // Daten für zuletzt gelernte Lektionen und empfohlene Lektionen
  zuletztGelernteLektionen = [
    { name: 'Einführung in die Grammatik', beschreibung: 'Grundlagen der deutschen Grammatik.' },
    { name: 'Wortschatz Aufbau', beschreibung: 'Erweiterung des Vokabulars.' }
  ];

  empfohleneLektionen = [
    { name: 'Fortgeschrittene Grammatik', beschreibung: 'Komplexe Satzstrukturen.' },
    { name: 'Aussprache Training', beschreibung: 'Verbesserung der Aussprache.' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
