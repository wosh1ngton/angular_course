import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacaoPageComponent } from './validacao-page.component';

describe('ValidacaoPageComponent', () => {
  let component: ValidacaoPageComponent;
  let fixture: ComponentFixture<ValidacaoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidacaoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidacaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
