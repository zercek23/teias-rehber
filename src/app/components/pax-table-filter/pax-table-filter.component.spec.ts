import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaxTableFilterComponent } from './pax-table-filter.component';

describe('PaxTableFilterComponent', () => {
  let component: PaxTableFilterComponent;
  let fixture: ComponentFixture<PaxTableFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaxTableFilterComponent]
    });
    fixture = TestBed.createComponent(PaxTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
