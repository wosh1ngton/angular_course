import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor() { }
  @Input() isActive = true;
  @Input() totalCounts = 0;
  ngOnInit(): void {
  }

  onClickLike() {
    this.isActive = !this.isActive;    
    this.totalCounts = this.isActive ? 1 : 0;
  }
}
