import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonRehberiComponent } from './telefon-rehberi.component';

describe('TelefonRehberiComponent', () => {
  let component: TelefonRehberiComponent;
  let fixture: ComponentFixture<TelefonRehberiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelefonRehberiComponent]
    });
    fixture = TestBed.createComponent(TelefonRehberiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
