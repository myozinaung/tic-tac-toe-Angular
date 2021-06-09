import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RudderComponent } from './rudder.component';

describe('RudderComponent', () => {
  let component: RudderComponent;
  let fixture: ComponentFixture<RudderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RudderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RudderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
