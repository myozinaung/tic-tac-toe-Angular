import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstumentsComponent } from './instuments.component';

describe('InstumentsComponent', () => {
  let component: InstumentsComponent;
  let fixture: ComponentFixture<InstumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
