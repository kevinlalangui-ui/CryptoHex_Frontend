import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTweet } from './custom-tweet';

describe('CustomTweet', () => {
  let component: CustomTweet;
  let fixture: ComponentFixture<CustomTweet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomTweet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTweet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
