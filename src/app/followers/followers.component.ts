import { Component, Input, OnInit } from '@angular/core';
import { FollowerService } from '../follower.service';
interface Follower {
  avatar :any,
  login:string,
  link: string
}
@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers : any = [];
  @Input() menusFollowers: any = [];
  follower : Follower = {avatar:'',login:'',link:''}
  constructor(private followerService: FollowerService) { }

  ngOnInit(): void {
    this.followerService.getAll().subscribe(
      followers => this.followers = followers
    );
  }
 
}
