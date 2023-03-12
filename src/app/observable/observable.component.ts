import { Component } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  chamadaSubscribe = {
    codigo: `
    ngOnInit(): void {    
      this.service.getPosts()
        .subscribe({
          next: (response) => {
            this.posts = response as any;        
          }, 
          error: (e) => {
            alert('erro');
            console.log(e);
          }
        });     
    }
    `,
    titulo: 'Código 1 - chamada subscribe',
    pagina: 'exemplo.component.ts'
  };

}
