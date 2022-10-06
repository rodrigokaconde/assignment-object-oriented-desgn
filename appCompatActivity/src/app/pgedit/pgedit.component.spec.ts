import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgeditComponent } from './pgedit.component';

describe('PgeditComponent', () => {
  let component: PgeditComponent;
  let fixture: ComponentFixture<PgeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
