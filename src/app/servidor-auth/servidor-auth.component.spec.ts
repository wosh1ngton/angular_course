import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServidorAuthComponent } from './servidor-auth.component';

describe('ServidorAuthComponent', () => {
  let component: ServidorAuthComponent;
  let fixture: ComponentFixture<ServidorAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServidorAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServidorAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
