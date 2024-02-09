import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanHistoryComponent } from './german-history.component';

describe('GermanHistoryComponent', () => {
  let component: GermanHistoryComponent;
  let fixture: ComponentFixture<GermanHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GermanHistoryComponent]
    });
    fixture = TestBed.createComponent(GermanHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
