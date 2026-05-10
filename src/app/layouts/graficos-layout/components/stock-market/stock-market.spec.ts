import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMarket } from './stock-market';

describe('StockMarket', () => {
  let component: StockMarket;
  let fixture: ComponentFixture<StockMarket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockMarket]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockMarket);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
