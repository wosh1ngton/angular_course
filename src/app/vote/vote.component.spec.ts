import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  //Arrange
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async () => {
    // set up
    await TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
  it('should increment total votes when upvoted', () => {
    //Act
    component.upVote();
    //Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement total votes when downvoted', () => {
    //Act
    component.downVote();
    //Assert
    expect(component.totalVotes).toBe(-1);
  });
});
