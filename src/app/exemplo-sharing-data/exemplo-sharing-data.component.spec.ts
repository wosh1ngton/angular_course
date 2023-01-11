import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploSharingDataComponent } from './exemplo-sharing-data.component';

describe('ExemploSharingDataComponent', () => {
  let component: ExemploSharingDataComponent;
  let fixture: ComponentFixture<ExemploSharingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploSharingDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploSharingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
