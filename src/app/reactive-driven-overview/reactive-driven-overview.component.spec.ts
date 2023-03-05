import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDrivenOverviewComponent } from './reactive-driven-overview.component';

describe('ReactiveDrivenOverviewComponent', () => {
  let component: ReactiveDrivenOverviewComponent;
  let fixture: ComponentFixture<ReactiveDrivenOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveDrivenOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveDrivenOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
