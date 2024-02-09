import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanAudiobooksComponent } from './german-audiobooks.component';

describe('GermanAudiobooksComponent', () => {
  let component: GermanAudiobooksComponent;
  let fixture: ComponentFixture<GermanAudiobooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GermanAudiobooksComponent]
    });
    fixture = TestBed.createComponent(GermanAudiobooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
