import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanMusicComponent } from './german-music.component';

describe('GermanMusicComponent', () => {
  let component: GermanMusicComponent;
  let fixture: ComponentFixture<GermanMusicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GermanMusicComponent]
    });
    fixture = TestBed.createComponent(GermanMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
