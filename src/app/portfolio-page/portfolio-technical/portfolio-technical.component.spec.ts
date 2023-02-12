import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTechnicalComponent } from './portfolio-technical.component';

describe('PortfolioTechnicalComponent', () => {
  let component: PortfolioTechnicalComponent;
  let fixture: ComponentFixture<PortfolioTechnicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioTechnicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
