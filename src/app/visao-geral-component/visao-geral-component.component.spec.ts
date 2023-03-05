import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaoGeralComponentComponent } from './visao-geral-component.component';

describe('VisaoGeralComponentComponent', () => {
  let component: VisaoGeralComponentComponent;
  let fixture: ComponentFixture<VisaoGeralComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaoGeralComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisaoGeralComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
