import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCertificationComponent } from './portfolio-certification.component';

describe('PortfolioCertificationComponent', () => {
  let component: PortfolioCertificationComponent;
  let fixture: ComponentFixture<PortfolioCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioCertificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
