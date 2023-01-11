import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course';
  post = {
    title : "title",
    isFavorite : false
  }

  onFavoriteChanged(eventArgs:{}) {
    console.log("favorite changed!",eventArgs);
  }

  items = ['item1','item2','item3'];

  addItems(value:string) {
    this.items.push(value);
  }


}
