import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProfExperienceComponent } from './portfolio-prof-experience.component';

describe('PortfolioProfExperienceComponent', () => {
  let component: PortfolioProfExperienceComponent;
  let fixture: ComponentFixture<PortfolioProfExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioProfExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioProfExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
