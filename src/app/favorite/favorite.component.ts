import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }
  favorito = false;
  ngOnInit(): void {
  }

  onClick() {
    
    if(this.favorito) {
      this.favorito = false;
    } else {
      this.favorito = true;
    }
    console.log('clicou!');
  }

}
