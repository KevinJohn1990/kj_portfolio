import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioEducationComponent } from './portfolio-education.component';

describe('PortfolioEducationComponent', () => {
  let component: PortfolioEducationComponent;
  let fixture: ComponentFixture<PortfolioEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
