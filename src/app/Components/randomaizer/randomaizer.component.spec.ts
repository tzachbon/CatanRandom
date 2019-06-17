import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomaizerComponent } from './randomaizer.component';

describe('RandomaizerComponent', () => {
  let component: RandomaizerComponent;
  let fixture: ComponentFixture<RandomaizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomaizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomaizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
