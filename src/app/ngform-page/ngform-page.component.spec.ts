import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgformPageComponent } from './ngform-page.component';

describe('NgformPageComponent', () => {
  let component: NgformPageComponent;
  let fixture: ComponentFixture<NgformPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgformPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgformPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
