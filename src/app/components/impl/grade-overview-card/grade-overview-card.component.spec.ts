import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeOverviewCardComponent } from './grade-overview-card.component';

describe('GradeOverviewCardComponent', () => {
  let component: GradeOverviewCardComponent;
  let fixture: ComponentFixture<GradeOverviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeOverviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
