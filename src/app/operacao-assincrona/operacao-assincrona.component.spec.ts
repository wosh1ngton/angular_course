import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacaoAssincronaComponent } from './operacao-assincrona.component';

describe('OperacaoAssincronaComponent', () => {
  let component: OperacaoAssincronaComponent;
  let fixture: ComponentFixture<OperacaoAssincronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacaoAssincronaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperacaoAssincronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
