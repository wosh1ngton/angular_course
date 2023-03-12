import { Component } from '@angular/core';

@Component({
  selector: 'app-tratamento-de-erros',
  templateUrl: './tratamento-de-erros.component.html',
  styleUrls: ['./tratamento-de-erros.component.css']
})
export class TratamentoDeErrosComponent {
  subscribeComErros = {
    codigo: `
    CreatePost(input: HTMLInputElement) {
      let post: any = {
        title: input.value,
       
      };
      input.value = '';
      //post também retorna um observable, assim como todos os métodos HTTPClient
      this.service.createPost(post)
        .subscribe({
            next : (response: any) => {        
            post.id = response.id;
            //para adicionar no início use splice, para o fim utilize push
            this.posts.splice(0, 0, post);
          },
          error : (e: Response) => {
            if(e.status === 400) {
              // this.form.setErrors(e) 
            } 
            else {
              console.log("um erro inesperado ocorreu " + e);
            }
          }    
      })
    }
    `,
    titulo: 'Código 1 - Subscribe com erros',
    pagina: 'post.component.ts'
  };

  codigoPipeCatchError = {
    codigo: `
    deletePost(id: string) {
      return this.http.get(this.url + '/' + id)
        .pipe(
          map((n:any) => {
              return n
            }),
          catchError((err: Response) => { 
            if(err.status === 404) {            
              throw (new NotFoundError());
            }                      
            throw (new AppError(err));
          })
        )   
    }
    `,
    titulo: 'Código 2 - Erros no service',
    pagina: 'post.service.ts'
  };

  codigoErroPostComponent = {
    codigo: `
    deletePost(post: HTMLInputElement) {
      this.service.deletePost("8000")
        .subscribe({
          next : (response) => {
            let index = this.posts.indexOf(post);
            this.posts.splice(index, 1);        
          },
          error: (e: AppError) => { 
            if(e instanceof NotFoundError) {
              alert('Este post já foi deletado');            
            }
            else {
              console.log("Um erro inesperado ocorreu" + e);
            }
          }    
      })
    }
    `,
    titulo: 'Código 3 - tratamento do erro no componente',
    pagina: 'post.component.ts'
  };


  codigoAppErrorHandler = {
    codigo: `
    import { ErrorHandler } from "@angular/core";

    export class AppErrorHandler implements ErrorHandler {
        
        handleError(error: any): void {
            alert("Um erro inesperado ocorreu");
            console.log(error);
        }
    
    }
    `,
    titulo: 'Código 4 - Error Handler global',
    pagina: 'app-error.ts'
  };

  codigoProviderErrorHandler = {
    codigo: `
    [...]
    providers: [
      DirectiveService,
      {provide: ErrorHandler, useClass: AppErrorHandler}
    ]
    ...
    ,
    `,
    titulo: 'Código 5 - Provider Error Handler',
    pagina: 'app.module.ts'
  };

  codigoThrowErrorHandler = {
    codigo: `
    deletePost(post: HTMLInputElement) {
      this.service.deletePost("8000")
        .subscribe({
          next: (response) => {
            let index = this.posts.indexOf(post);
            this.posts.splice(index, 1);
          },
          error: (e: AppError) => {
            if (e instanceof NotFoundError) {
              alert('Este post já foi deletado');
            }
            else throw e;
          }
        })
    }


    ngOnInit(): void {
      this.service.getPosts()
        .subscribe((response) => {
            this.posts = response as any;
          })
        }
      }
    `,
    titulo: 'Código 6 - Error Handler throw',
    pagina: 'post.component.ts'
  };
}
