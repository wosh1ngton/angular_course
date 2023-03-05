import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacaoRdComponent } from './validacao-rd.component';

describe('ValidacaoRdComponent', () => {
  let component: ValidacaoRdComponent;
  let fixture: ComponentFixture<ValidacaoRdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidacaoRdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidacaoRdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
