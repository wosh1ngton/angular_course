import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacaoFromComponent } from './validacao-from.component';

describe('ValidacaoFromComponent', () => {
  let component: ValidacaoFromComponent;
  let fixture: ComponentFixture<ValidacaoFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidacaoFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidacaoFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
