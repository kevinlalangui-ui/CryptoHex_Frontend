import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingInsights } from './trending-insights';

describe('TrendingInsights', () => {
  let component: TrendingInsights;
  let fixture: ComponentFixture<TrendingInsights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingInsights]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingInsights);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
