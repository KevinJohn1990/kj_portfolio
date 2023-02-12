import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioThanksComponent } from './portfolio-thanks.component';

describe('PortfolioThanksComponent', () => {
  let component: PortfolioThanksComponent;
  let fixture: ComponentFixture<PortfolioThanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioThanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
