import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanAccessComponent } from './can-access.component';

describe('CanAccessComponent', () => {
  let component: CanAccessComponent;
  let fixture: ComponentFixture<CanAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
