import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaxRehberiComponent } from './pax-rehberi.component';

describe('PaxRehberiComponent', () => {
  let component: PaxRehberiComponent;
  let fixture: ComponentFixture<PaxRehberiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaxRehberiComponent]
    });
    fixture = TestBed.createComponent(PaxRehberiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
