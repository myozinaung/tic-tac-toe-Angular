import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdgComponent } from './hdg.component';

describe('HdgComponent', () => {
  let component: HdgComponent;
  let fixture: ComponentFixture<HdgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HdgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
