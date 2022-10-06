import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcadastroComponent } from './pgcadastro.component';

describe('PgcadastroComponent', () => {
  let component: PgcadastroComponent;
  let fixture: ComponentFixture<PgcadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgcadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgcadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
