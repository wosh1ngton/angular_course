import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesPageComponent, compute, greet } from './testes-page.component';

describe('TestesPageComponent', () => {
  let component: TestesPageComponent;
  let fixture: ComponentFixture<TestesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });
  it('should increment the input if is positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});

describe('greet', () => {
  it('should include the name in the message', () => {
    expect(greet('wosh')).toContain('wosh');
  })
});
