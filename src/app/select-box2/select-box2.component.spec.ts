import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBox2Component } from './select-box2.component';

describe('SelectBox2Component', () => {
  let component: SelectBox2Component;
  let fixture: ComponentFixture<SelectBox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBox2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
