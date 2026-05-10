import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAppl } from './widget-appl';

describe('WidgetAppl', () => {
  let component: WidgetAppl;
  let fixture: ComponentFixture<WidgetAppl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetAppl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetAppl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
