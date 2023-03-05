import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRotasComponent } from './info-rotas.component';

describe('InfoRotasComponent', () => {
  let component: InfoRotasComponent;
  let fixture: ComponentFixture<InfoRotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoRotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoRotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
