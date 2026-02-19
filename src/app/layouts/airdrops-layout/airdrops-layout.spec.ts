import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirdropsLayout } from './airdrops-layout';

describe('AirdropsLayout', () => {
  let component: AirdropsLayout;
  let fixture: ComponentFixture<AirdropsLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirdropsLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirdropsLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
