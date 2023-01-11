# AngularCourse

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Component Decorator

é um Decorator que define uma classe como um componente angular e provê os metadados que determinam como o componente deve ser processado, instanciado e utilizado em tempo de execução.

Os componentes funcionam como blocos de construção, uma aplicação angular contém uma árvore de componentes

Para utilizar um componente, primeiro é preciso criá-lo, depois registrá-lo em um módulo e por último adicioná-lo na marcação HTML da página onde será utilizado.

Por padrão os componentes são nomeados da seguinte forma: name.component.ts, se o nome é composto, utiliza-se o hífen para separação

Um componente encapsula a lógica de apresentação (arquivo typescript), a apresentação em si (arquivo html) e a formatação e estilo (arquivo css)
da apresentação

# Component CLI

para criar um componente utilizando o CLI (Command Line Interface) utilize o comando 
ng g c name dentro de um workspace angular.


# Modules

É um container para separar as partes de uma aplicação, funciona de forma similar aos corredores de um supermercado, cada corredor possui um conjunto de itens de natureza similar, assim são os módulos, possuem componentes de natureza similar.
Uma aplicação simples, poderia possuir apenas o módulo que é criado por padrão pelo angular, o AppModule, mas a medida que a aplicação cresce, pode ser necessário acrescentar novos módulos para melhor organizar o código.

# Directives

AngularJS permite que o html seja extendido através de novos atributos, chamados directives.
o Angular possui diretivas built-in, ou seja, próprias do framework, as quais oferecem funcionalidades
para as aplicações, é possível também definir suas próprias diretivas.

AngularJS directives possuem o prefixo ng-name

As diretivas mudam a aparência e comportamento dos elementos DOM e dos componentes do angular

# Directive CLI

para criar uma diretiva basta comandar: ng g d name.
A criação resultará em um arquivo typescript com uma função decorator 
    
    @Directive({ selector: '[name]'})

# Service

No AngularJS, service é uma função, ou objeto, que é disponibilizado para, e limitado a aplicação angular
em que está inserido, o AngularJS conta com cerca de 30 built-in services, os services conseguem lidar
melhor com handle changes e eventos.
é uma categoria ampla que circunda qualquer valor, função, ou feature que uma aplicação precise.
Service é tipicamente uma classe com um propósito bem definido, deve fazer algo específico e fazê-lo bem.

O Angular distingue componentes de serviços para acrescentar modularidade e reúso, haja vista que o
trabalho de um componente é possibilitar a experiência do usuário, assim, um componente deve usar services para tarefas que não envolvam a view ou lógica de aplicação.

Services são recomendáveis para tarefas como: buscar dados do servidor, validar entradas do usuário, ou
logs. Definindo estes serviços como injectable services, é possível utilizá-los em quaisquer componentes,
também é possível fazer aplicações mais flexíveis injetando diferentes provedores do memso tipo de serviço, conforme se apresenta a circunstância.

Um service pode depender de outro service.

# Dependency Injection (DI)

DI é a parte do angular que provê aos componentes acesso a determinado serviços, injetando o serviço no
componente, injeção de dependência significa: injete a dependência desta classe em seu construtor,
o Angular tem um built-in framework de injeção de dependência, os providers podem ser adicionados
na array providers[] dentro do AppModule.__
O Angular provider cria uma única instância do serviço provido, mesmo que seja utilizado por dezenas
de classes, na memória, apenas uma instância será criada, este é o Singleton pattern.
Quando o Angular detecta que uma classe precisa de um serviço, ele checa o injector (container) para verificar se já existe uma instância do serviço, caso não exista ele cria a instância usando o provider registrado e o adiciona ao injector antes de retornar o serviço, quando todos os serviços forem resolvidos ele retorna o serviço para o construtor do componente.

# Provendo os serviços

é preciso registrar pelo menos um provedor para qualquer serviço que se pretenda usar, o provider
pode ser parte dos metadados do serviço, fazendo com que o serviço esteja disponível em qualquer lugar,
ou pode ser registrado para módulos ou componentes específicos. Pode ser registrado no @Injectable do
próprio serviço, ou no @NgModule ou no @Component.
Por padrão, o comando "ng g s service" registra o provider com o root injector assim:
       
    @Injectable({
        providedIn: 'root',
    })

Neste caso estará disponível para qualquer classe que o solicite, o 'root' é o application-wide injector
que no bootstrap da aplicação fará as injeções de dependência necessárias

No nível de módulo, seria assim:

    @NgModule({
        providers:[
            BackendService,
            Logger
        ],
    })

Neste caso estaria disponível para qualquer classe do módulo

No nível de componente seria assim:

    @Component({
        selector: '',
        templateUrl: '',
        providers: [HeroService]
    })

Neste caso, se obtém uma nova instância do serviço com cada nova instância do componente

# Injectable

O @Injectable() decorator define uma classe como um serviço no angular e permite  que o Angular o injete
em um componente como uma dependência. 

# Property Binding

O property binding faz a ligação (binding) de um elemento do DOM, ou diretiva com um campo atribuído no componente, o interpolation string => {{ name }} é um syntatic sugar do property binding.__
o property binding é muito utilizado para fazer coisas como togglar botões, definir caminhos dinamicamente e compartilhar valores entre componentes.__
O VALOR SE MOVE EM UMA ÚNICA DIREÇÃO, vai da propriedade de componente para a propriedade de um elemento alvo. para fazer a ligação com uma propriedade de um elemento utiliza-se colchetes [], isso irá identificar a propriedade como uma target property, uma target property é uma propriedade (atributo) do DOM a qual você quer atribuir um valor, assim:

    <img alt="item" [src]="itemImageUrl">

o valor a diretia do atributo [src] será avaliado dinamicamente e não como uma string, sem os colchetes o valor seria avaliado como se uma string fosse.

Um erro comum é confundir os elementos do DOM com os elementos HTML, o property bind utiliza-se dos elementos do DOM, então, para mudar dinamicamente o colspan utiliza-se [colSpan]="value" e não [colspan] como no HTML.

## Property Binding em Angular Components

Até aqui, foi possível visualizar o uso de property binding em elementos conhecidos do DOM, mas e se quisermos utilizar em nossos próprios componentes? por exemplo, suponha que fora criado um componente para favoritar itens e o componente tenha a propriedade isFavorite para mostrar se o item está ou não favoritado, o uso da expressão:

    <favorite [isFavorite]="post.isFavorite"></favorite>

resultaria em erro, pois isFavorite não é reconhecido como uma property do componente favorite, para poder utilizar o property binding é preciso designar a propriedade como uma "input property", através do decoratar @Input(), assim:

    @Input() isFavorite = false;

# Adicionando bootstrap ao projeto

Utilize o npm para instalar o bootstrap no seu projeto angular, faça npm install bootstrap --save
a instrução --save irá adicionar a versão do bootstrap no package.json, neste padrão ^5.2.3 => major.minor.patch, o circunflexo no início indica que podemos sempre usar a versão mais nova da minor version, caso a major version seja alterada a mudança não será feita em automático. 

A pasta node_modules, por padrão, não vai para o github quando fazemos o push, apenas o package.json vai. Com esse arquivo (package.json), qualquer pessoa que queira baixar o código e atualizar as dependências, basta teclar npm install para pegar todas as dependências do package.json

# Importando o css

Adicione ao arquivo style.css a importação do css do bootstrap => @import "~bootstrap/dist/css/bootstrap.css";

# Class Binding

É uma variação do property binding, utiliza-se da seguinte forma:

    [class.nameClass]="fieldComponent"

É usado para adicionar ou remover classes CSS dos atributos class e setar estilos dinamicamente
o fieldComponent será um valor booleano. 
Para fazer o binding com múltiplas classes utiliza-se 

    [class]="classExpression"

a expressão pode ser: 

1. uma string de nome de classes, delimitada por espaços;
2. um objeto com o nome das classes como chave e o valor como expressões booleanas
3. uma array de nome de classes

Referências: [Angular Class Binding](https://angular.io/guide/class-binding)

# Style Binding

utiliza a mesma lógica do class binding, a sintaxe é a seguinte:

    [style.background-color]="expression",

para múltiplos estilos, utiliza-se a seguinte expressão:

    [style]="styleExpression"

a expressão pode ser:
1. uma string com uma lista de estilos separados por ponto e vírgula;
2. um objeto chave valor, o style name como chave e os valores como valores

Exemplo: 

    template: `
    <nav [style]='navStyle'>
        <a [style.text-decoration]="activeLinkStyle"> Home Page </a>
    </nav> 
    `

    export class NavBarComponent {
        navStyle = 'font-size: 1.2rem; color; cornflowerblue;';
        activeLinkStyle = 'overline';
    }


# Aplicando estilos a um componente

Há três formas de usar estilos em um componente:

1. utlizando a propriedade styleUrls: no @Component decorator, passando um ou mais arquivo(s) de estilo
2. utlizando a propriedade styles no @Component decorator, assim:
styles: [`
    padding: 3px;
    margin: 0;
`]
3. Escrevendo as instruções inline dentro do arquivo html do componente. (não recomendável)

Em caso de declarações conflitantes, por exemplo, uso de stylesUrls e styles de forma concomitante com instruções que se anulam, será considerada a última como válida. caso utlize instruções no arquivo html, essas serão as instruções válidas.


# Event Binding

Event Binding permite que você capture e responda a ações do usuário, tais como acionamento de teclas, movimentos do mouse, cliques e outros. a sintaxe do event binding é composta pelo nome do evento entre parenteses o sinal de igual e o nome do método entre aspas, assim:

    <button (click)="onSave()">Save</button>

o event binding espera pelo evento de clique no botão e chama o método do componente associado.

O event binding, quando aplicado a um componente, deve especificar o método como um output, da seguinte forma:

    @Output doSomething() { ; }

## Determinando um event target

Usualmente precisamos ter acesso ao event object que foi acionado, através do event handler, por exemplo, ao movimentar o mouse, o evento de movimentar nos dará um objeto com as coordenadas do mouse (x,y). para ter acesso ao event object, é preciso informá-lo no parâmetro do método chamado, assim:
        
    <button (click)="onSave($event)">Save</button>

Para determinar um evento alvo, o angular verifica se o nome do evento alvo bate com uma propriedade de evento de uma diretiva conhecida, conforme exemplo abaixo, em que o angular verifica se myClick é um evento na diretiva customizada ClickDirective

        <h4> myClick is an event on the custom ClickDirective: </h4>
        <button type="button" (myClick)="clickMessage=$event" clickable> click with myClick </button>
        {{ clickMessage }}

## Event Filtering

É possível filtrar o evento, por exemplo:

        <input (onKeyUp.Enter)="onKeyUp()">

Com esta sintaxe, o método onKeyUp() somente será chamado se o Enter for pressionado, ou seja, o evento onKeyUp foi filtrado para responder apenas quando o Enter.
É possível fazer o bind para vários eventos do teclado, você pode especificar a tecla ou o código que você quiser, Combinações de teclas podem ser separadas por ponto (.)

# Template Variables

Template variables auxilia o uso de dados de uma parte do template em outra parte do template. São muito usadas para executar tarefas como responder a entradas do usuário ou ajustar os formulários de sua aplicação. Uma variável de template pode se referir:

1. Um DOM element dentro de um template;
2. a uma diretiva ou componente;
3. A um templateRef de um ng-template;
4. um web component

## Sintaxe

é utilizada a hastTag (#) para declarar uma variável de template, no exemplo a seguir a template variable #phone é usada em um input (Dom element)

        <input #phone placeholder="phone number">

uma vez declarada, pode ser utilizada em qualquer lugar no template do componente.
Para passar o valor de um campo texto para o componente, pode ser utilizada uma template variable, da seguinte forma;

        <input #email (keyup.enter)="onKeyUp(email.value)">
no componente, fazemos assim:

        onKeyUp(email:any) {
            console.log(email)
        }

Essa mesma função também pode ser feita através do property binding, assim:
        
        <input [value]="email2" (keyup.enter)="onKeyUp()">
        class..
        email2 = "email@email.com"


Como a template variable foi declarada dentro de um elemento html, ela faz referência ao elemento. 

# Two ways data binding

O binding pode ocorrer em duas vias, o property binding leva o valor do componente para o DOM element,
o event binding leva o valor do Dom element para o componente. Há ainda a alternativa do two-way binding, que faz tanto o envio quanto a recepção do dado, ele pode ser feito de duas maneiras: 
1) Na primeira opção, cria-se uma template variable que será passada via evento para o componente, isto resolve a passagem do valor do elemento DOM para o componente (arquivo ts), na mesma estrutura, utiliza-se o property binding para capturar o valor passado do componente para o elemento DOM. a implementação fica assim:

    <!-- two way binding, maneira longa -->    
    <input #emailT [value]="email" (keyup.enter)="onKeyUp(emailT.value)" />

2) Uma outra forma de implementar o two-way binding é pelo bananaBox, é uma forma simplificada, basta utilizar a diretiva ngModel, é uma espécie de syntatic sugar da implementação anterior, fica assim:

    <!-- two way binding bananaBox -->    
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

# Pipes

O Pipe é um recurso de transformação de dados, auxilia na formatação de strings, moedas, datas e outros tipos de dados para exibição. Pipes são funções que recebem um valor e retornam esse mesmo valor com a formatação desejada, os Pipes são reutilizáveis.__
O Angular tem uma série de built-in pipes para transformações de dados, a lista completa pode ser acompanhada na [documentação da API](https://angular.io/api/common#pipes).

Utilize o caracter (|) seguido do nome do pipe para utilizar o recurso, por exemplo:

    template: `
    {{course.title | uppercase}} <br /> //pipe para transformar uma string em maiúsculo
    {{course.students | number }} <br /> //pipe para formatar número
    {{course.rating | number:'1.2-2'}} <br />  //este pipe recebe argumentos
    {{course.price | currency:'BRL':"code" }} <br />
    {{course.releaseDate | date:'shortDate' }} <br />
    `,

## Custom Pipe

Para criar um pipe customizado, basta criar um arquivo typscript e adicionar o decorator @Pipe({name:'nome-pipe'}), dentro da classe, define-se a implementação do pipe, o Pipe implementa a interface transform que recebe um valor como argumento e parâmetros opcionais.

import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
        name: 'summary'
    })
    export class SummaryPipe implements PipeTransform {
        
        transform(value: string, limit: number) {
            if(!value)
                return null;
            let actualLimit = (limit) ? limit : 50;
            return value.substring(0, actualLimit) + '...';
        }

    }


# Input e Outputs properties

Quando trabalhamos com componentes, eventualmente necessitamos utilizar suas propriedades e seus métodos para passar o estado do componente e reagir a eventos disparados, para isso, utilizamos Input e Output properties, a isso dá-se o nome de "public API". Sem as anotações de Input e Output não é possível utilizar property binding e event binding no componente.

Os decorators @Input() e @Output() permitem o compartilhamento de dados entre child e parent directives e components, o @Input() permite que o componente pai atualize dados no componente filho, já o @Output() permite que o elemento filho envie dados para o elemento pai.

## Enviando dados para um elemento filho

O @Input() decorator em um elemento filho ou diretiva significa que a propriedade pode receber seu valor de um componente pai.

@Input => Parent => Child.

Para utilizar o @Input é preciso configurar parent e child elements.

    @Input() item = '';

item pode ser de qualquer tipo, inclusive um objeto, o valor de item vem do componente pai. No template do componente filho, tem-se:

    <p>
        Today's item: {{ item }}
    </p>

No componente pai, fazemos o property binding propriamente dito, neste caso estamos trabalhando no app-component como sendo o componente pai, pois ele engloba o componente app-item-detail.

    <app-item-detail [item]="currentItem"> </app-item-detail>

No componente pai, designamos o valor para o currentItem

    export class AppComponent {
        currentItem = 'Television';
    }

# Enviando dados para o componente pai

o @Output decorator em um componente filho ou diretiva permite o fluxo de dados do filho para o pai. o componente filho utiliza o @Output decorator para subir um evento para notificar o componente pai da mudança, para subir o evento, um @Output precisa ter o tipo EventEmitter, que é uma classe do @angular/core que utilizamos para emitir eventos customizados.__
O exemplo a seguir mostra como configurar um @Output() em um componente filho que envia dados de um <input> HTML para uma array no componente pai. Para usar o @Output() é preciso configurar parent e child.

## Configurando o componente filho

    //app-item-output é o emissor ou fornecedor do evento newItemEvent
    @Output() newItemEvent = new EventEmitter<string>();

na mesma classe do componente, cria-se um método que irá emitir o evento

    addNewItem(value: string) {
        this.newItemEvent.emit(value);
    }

A função addNewItem() utiliza o @Output(), newItemEvent, para subir um evento com o valor que o usuário informar no <input>

## Configurando o template do elemento filho

    <label for="item-input"> Add an item: </lable>
    <input type="text" id="item-input" #newItem>
    <button type="button" (click)="addNewItem(newItem.value)"> Add to parent's list </button>

Ao clicar no botão o método addNewItem() do componente é acionado, ele possui como parâmetro o valor da template variable #newItem, que nada mais é que o valor que o usuário irá informar no campo de texto

## Configurando o componente pai

Neste exemplo, utilizamos o AppComponent, o qual terá uma lista de itens e um método para adicionar mais itens.


    export class AppComponent {
        items = ['item1','item2','item3','item4'];

        addItem(newItem:string) {
            this.items.push(newItem);
        }
    }

o método addItem() irá receber o argumento, no exemplo, uma string.

## Configurando o template do elemento pai

No template, (app.component.html), linkamos o método do elemento pai (addItem()), com o evento, marcado como @Output no elemento filho (newItemEvent).
Essa chamada é feita na tag do elemento filho, assim:

    //app.component é o cliente ou consumidor do evento (newItemEvent)
    <app-item-output (newItemEvent)="addItem($event)"></app-item-output>

O even binding, (newItemEvent)='addItem($event)', liga o evento do elemento filho ao método do elemento pai. o objeto $event contém os dados que o usuário informa no <input>.
Para ver o @Output() funcionando, adicione o seguinte no parent's template:

    <ul>
        <li *ngFor="let item of items"> {{item}} </li>
    </ul>




