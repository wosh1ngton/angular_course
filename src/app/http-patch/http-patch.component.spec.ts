import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPatchComponent } from './http-patch.component';

describe('HttpPatchComponent', () => {
  let component: HttpPatchComponent;
  let fixture: ComponentFixture<HttpPatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpPatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
