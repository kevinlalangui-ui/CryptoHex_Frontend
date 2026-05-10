import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTweet } from './add-tweet';

describe('AddTweet', () => {
  let component: AddTweet;
  let fixture: ComponentFixture<AddTweet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTweet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTweet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
