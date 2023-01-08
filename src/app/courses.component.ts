import { Component } from "@angular/core";
import { AppComponent } from "./app.component";
// a palavra export é utilizada para que o angular possa enxergar a classe
// tanto import quanto export são palavras utilizadas para fazer com que o conteúdo de um módulo 
// esteja disponível  para ser utilizado em outros módulos


//Decorator é chamado como se uma função fosse, recebe uma lista de objetos como argumento
@Component({
    selector: 'courses', // seletor do elemento, como uma tag html
    // a variável {{ title }} está dentro uma string interpolation e será processado em TEMPO DE EXECUÇÃO
    // este é o conceito de data binding, a camada de apresentação está vinculada a camada de lógica
    // de apresentação, sempre que o valor do campo muda, a view é notificada e também muda
    template: '<h2> {{ title }} </h2>',
    
    //também  é possível inserir uma string dentro das chaves duplas, da seguinte forma:
    //template: '<h2> {{"título": title }} </h2>',

    //também é possível fazer a chamada de um método assim:
    //template: '<h2> {{ getTitle() }} </h2>',
})
export class CoursesComponent {
    //campo criado para armazenar o título da página
    //observe que o typescript é fracamente tipado, ele infere que se trata de uma string pela atribuição
    
    title = "List of courses";


    getTitle() {
        return this.title;
    }

}

//Após criar o component é preciso registrá-lo em um módulo, neste exemplo foi registrado no módulo 
// app.module.ts dentro da lista declarations
