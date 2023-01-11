import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  //property definida como uma input property
  @Input()  favorito = true;

  //property definida como uma output property
  @Output() change = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }

  onClick() {
    this.favorito = !this.favorito;    
    this.change.emit({newValue: this.favorito});
    console.log('clicou!');
  }

}
