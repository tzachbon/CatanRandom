import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionMapComponent } from './extension-map.component';

describe('ExtensionMapComponent', () => {
  let component: ExtensionMapComponent;
  let fixture: ComponentFixture<ExtensionMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensionMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
