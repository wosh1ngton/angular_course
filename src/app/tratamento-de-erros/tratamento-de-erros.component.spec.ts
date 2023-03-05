import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamentoDeErrosComponent } from './tratamento-de-erros.component';

describe('TratamentoDeErrosComponent', () => {
  let component: TratamentoDeErrosComponent;
  let fixture: ComponentFixture<TratamentoDeErrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratamentoDeErrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratamentoDeErrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
