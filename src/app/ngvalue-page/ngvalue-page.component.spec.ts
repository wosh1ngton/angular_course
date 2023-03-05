import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgvaluePageComponent } from './ngvalue-page.component';

describe('NgvaluePageComponent', () => {
  let component: NgvaluePageComponent;
  let fixture: ComponentFixture<NgvaluePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgvaluePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgvaluePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
