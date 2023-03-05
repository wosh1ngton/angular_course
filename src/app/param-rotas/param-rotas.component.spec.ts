import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamRotasComponent } from './param-rotas.component';

describe('ParamRotasComponent', () => {
  let component: ParamRotasComponent;
  let fixture: ComponentFixture<ParamRotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamRotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParamRotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
