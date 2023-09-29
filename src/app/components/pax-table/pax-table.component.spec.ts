import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaxTableComponent } from './pax-table.component';

describe('PaxTableComponent', () => {
  let component: PaxTableComponent;
  let fixture: ComponentFixture<PaxTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaxTableComponent]
    });
    fixture = TestBed.createComponent(PaxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
