import { Component } from '@angular/core';

@Component({
  selector: 'app-testes-page',
  templateUrl: './testes-page.component.html',
  styleUrls: ['./testes-page.component.css']
})
export class TestesPageComponent {
  testeCompute = {
    codigo: `
    export function compute(number: number) {
      if(number < 0)
        return 0;
      return number + 1;
    }
    `,
    titulo: 'Código 1 - deve retornar 0 se o input for negativo',
    pagina: 'testes-page.component.ts'
  };

  testeSpecCompute = {
    codigo: `
    import { TestesPageComponent, compute } from './testes-page.component';

    describe('TestesPageComponent', () => {
      it('should return 0 if input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
      });
    }); 
    
    `,
    titulo: 'Código 2 - teste implementado',
    pagina: 'testes-page.component.spec.ts'
  }


  
  testeComponent = {
    codigo: `
    import { VoteComponent } from './vote.component';

    describe('VoteComponent', () => {
      //Arrange
      let component: VoteComponent; 
    
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
    `,
    titulo: 'Código 3 - teste de componente',
    pagina: 'vote.component.spec.ts'
  }

}

export function compute(number: number) {
  if(number < 0)
    return 0;
  return number + 1;
}

export function greet(name: string) {
  return 'Welcome' + name;
}