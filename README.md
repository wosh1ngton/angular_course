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
Uma aplicação simples, poderia possui apenas o módulo que é criado por padrão pelo angular, o AppModule, mas a medida que a aplicação cresce, pode ser necessário acrescentar novos módulos para melhor organizar o código.

# Directives

AngularJS permite que o html seja extendido através de novos atributos, chamados directives.
o Angular possui diretivas built-in, ou seja, próprias do framework, as quais oferecem funcionalidades
para as aplicações, é possível também definir suas próprias diretivas.

AngularJS directives possuem o prefixo ng-name

As diretivas mudam a aparência e comportamento dos elementos DOM e dos componentes do angular

# Directive CLI

para criar uma diretiva basta comandar: ng g d name.
A criação resultará em um arquivo typescript com uma função decorator @Directive({ selecotr: '[name]'})

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
na array providers[] dentro do AppModule
O Angular provider cria uma única instância do serviço provido, mesmo que seja utilizado por dezenas
de classes, na memória, apenas uma instância será criada, este é o Singleton pattern.
Quando o Angular detecta que uma classe precisa de um serviço, ele checa o injector (container) para verificar se já existe uma instância do serviço, caso não exista ele criar a instância usando o provider registrado e o adiciona ao injector antes de retornar o serviço, quando todos os serviços forem resolvidos ele retorna o serviço para o construtor do componente.

# Provendo os serviços

é preciso registrar pelo menos um provedor para qualquer serviço que se pretenda usar, o provider
pode ser parte dos metadados do serviço, fazendo com que o serviço esteja disponível em qualquer lugar,
ou pode ser registrado para módulos ou componentes específicos. Pode ser registrado no @Injectable do
próprio serviço, ou no @NgModule ou no @Component.
Por padrão, o comando "ng g s service" registra o provider com o root injector assim:
@Injectable({
    providedIn: 'root',
})
neste caso estará disponível para qualquer classe que o solicite, o 'root' é o application-wide injector
que no bootstrap da aplicação fará as injeções de dependência necessárias

No nível de módulo, seria assim
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