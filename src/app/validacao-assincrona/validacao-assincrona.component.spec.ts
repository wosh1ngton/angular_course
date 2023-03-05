import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacaoAssincronaComponent } from './validacao-assincrona.component';

describe('ValidacaoAssincronaComponent', () => {
  let component: ValidacaoAssincronaComponent;
  let fixture: ComponentFixture<ValidacaoAssincronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidacaoAssincronaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidacaoAssincronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
