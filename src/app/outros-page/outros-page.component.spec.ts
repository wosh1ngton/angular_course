import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrosPageComponent } from './outros-page.component';

describe('OutrosPageComponent', () => {
  let component: OutrosPageComponent;
  let fixture: ComponentFixture<OutrosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutrosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutrosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
