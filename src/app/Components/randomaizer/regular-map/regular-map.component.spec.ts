import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularMapComponent } from './regular-map.component';

describe('RegularMapComponent', () => {
  let component: RegularMapComponent;
  let fixture: ComponentFixture<RegularMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
