import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisseComponent } from './promisse.component';

describe('PromisseComponent', () => {
  let component: PromisseComponent;
  let fixture: ComponentFixture<PromisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromisseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
