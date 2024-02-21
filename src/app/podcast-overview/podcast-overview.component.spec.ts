import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastOverviewComponent } from './podcast-overview.component';

describe('PodcastOverviewComponent', () => {
  let component: PodcastOverviewComponent;
  let fixture: ComponentFixture<PodcastOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PodcastOverviewComponent]
    });
    fixture = TestBed.createComponent(PodcastOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
