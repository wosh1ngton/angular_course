import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAuthComponent } from './cliente-auth.component';

describe('ClienteAuthComponent', () => {
  let component: ClienteAuthComponent;
  let fixture: ComponentFixture<ClienteAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
