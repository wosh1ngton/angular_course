import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewRotasComponent } from './overview-rotas.component';

describe('OverviewRotasComponent', () => {
  let component: OverviewRotasComponent;
  let fixture: ComponentFixture<OverviewRotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewRotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewRotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
