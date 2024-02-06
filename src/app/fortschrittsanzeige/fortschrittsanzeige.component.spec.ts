import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortschrittsanzeigeComponent } from './fortschrittsanzeige.component';

describe('FortschrittsanzeigeComponent', () => {
  let component: FortschrittsanzeigeComponent;
  let fixture: ComponentFixture<FortschrittsanzeigeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FortschrittsanzeigeComponent]
    });
    fixture = TestBed.createComponent(FortschrittsanzeigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
