import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehberSecimComponent } from './rehber-secim.component';

describe('RehberSecimComponent', () => {
  let component: RehberSecimComponent;
  let fixture: ComponentFixture<RehberSecimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RehberSecimComponent]
    });
    fixture = TestBed.createComponent(RehberSecimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
