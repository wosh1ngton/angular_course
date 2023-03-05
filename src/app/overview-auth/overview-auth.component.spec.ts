import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewAuthComponent } from './overview-auth.component';

describe('OverviewAuthComponent', () => {
  let component: OverviewAuthComponent;
  let fixture: ComponentFixture<OverviewAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
