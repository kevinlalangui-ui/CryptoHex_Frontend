import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oscilador } from './oscilador';

describe('Oscilador', () => {
  let component: Oscilador;
  let fixture: ComponentFixture<Oscilador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oscilador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oscilador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
