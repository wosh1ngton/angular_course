import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectboComponent } from './selectbo.component';

describe('SelectboComponent', () => {
  let component: SelectboComponent;
  let fixture: ComponentFixture<SelectboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
