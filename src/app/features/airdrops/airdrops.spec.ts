import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Airdrops } from './airdrops';

describe('Airdrops', () => {
  let component: Airdrops;
  let fixture: ComponentFixture<Airdrops>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Airdrops]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Airdrops);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
