import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cinta } from './cinta';

describe('Cinta', () => {
  let component: Cinta;
  let fixture: ComponentFixture<Cinta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cinta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cinta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
