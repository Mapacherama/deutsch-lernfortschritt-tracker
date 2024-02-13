import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Vorhandene Beispiel Daten
  gelernteWoerter = 150;
  abgeschlosseneLektionen = 10;
  verbrachteLernzeit = '5 Stunden';

  // Aktualisierte FortschrittsStatistiken
  fortschrittsStatistiken = {
    grammatik: 70, // Prozent, verknüpft mit "Das erste Horn" als Buch, das ich am lesen bin
    wortschatz: 60, // Prozent
    aussprache: 80, // Prozent, verknüpft mit "Harry Potter Hörbuch 7" als Hörbuch, das ich am hören bin
  };

  // Daten für zuletzt gelernte Lektionen und empfohlene Lektionen bleiben gleich
  zuletztGelernteLektionen = [
    { name: 'Einführung in die Grammatik', beschreibung: 'Grundlagen der deutschen Grammatik.' },
    { name: 'Wortschatz Aufbau', beschreibung: 'Erweiterung des Vokabulars.' }
  ];

  empfohleneLektionen = [
    { name: 'Fortgeschrittene Grammatik', beschreibung: 'Komplexe Satzstrukturen.' },
    { name: 'Aussprache Training', beschreibung: 'Verbesserung der Aussprache.' }
  ];

  // Neue Eigenschaften für Medienkonsum
  letzterDeutscherFilm = 'Der Name des letzten Films'; // Beispiel: 'Der Name des letzten Films'
  letztesDeutschesBuch = { // Aktuell gelesenes oder zuletzt gelesenes Buch
    titel: 'Das erste Horn',
    status: 'Am lesen', // oder 'Gelesen'
    beschreibung: 'Ein Buch, das ich am lesen bin.'
  };
  letztesDeutschesAlbum = 'Der Name des letzten Albums'; // Beispiel: 'Der Name des letzten Albums'
  letztesDeutschesHoerbuch = {
    titel: 'Harry Potter Hörbuch 7',
    status: 'Am hören',
    beschreibung: 'Ein Hörbuch, das ich am hören bin.'
  };

  ngOnInit() {
    // Initialisierungslogik hier
  }

  // Weitere Methoden und Logik könnten hier hinzugefügt werden
}
