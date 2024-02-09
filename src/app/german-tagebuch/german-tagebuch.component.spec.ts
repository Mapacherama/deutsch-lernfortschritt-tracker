import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanTagebuchComponent } from './german-tagebuch.component';

describe('GermanTagebuchComponent', () => {
  let component: GermanTagebuchComponent;
  let fixture: ComponentFixture<GermanTagebuchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GermanTagebuchComponent]
    });
    fixture = TestBed.createComponent(GermanTagebuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
