import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegAutoComponent } from './reg-auto.component';

describe('RegAutoComponent', () => {
  let component: RegAutoComponent;
  let fixture: ComponentFixture<RegAutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegAutoComponent]
    });
    fixture = TestBed.createComponent(RegAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
