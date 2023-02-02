import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorObjetosComponent } from './gerador-objetos.component';

describe('GeradorObjetosComponent', () => {
  let component: GeradorObjetosComponent;
  let fixture: ComponentFixture<GeradorObjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeradorObjetosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeradorObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
