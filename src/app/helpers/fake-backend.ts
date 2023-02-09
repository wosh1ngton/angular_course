import { HttpClient } from '@angular/common/http';
import { HttpTestingController, TestRequest } from '@angular/common/http/testing';

export function fakeBackendFactory(
    backend: HttpTestingController,
    //a mock request that was received and is ready to be answered,
    //esta interface permite acessar o HttpRequest e permite responder com o HttpEvent ou HttpErrorResponse.
    //Seu construtor recebe um request<any> e um Observer<HttpEvent<any>>
    testRequest: TestRequest
) {

    //implementação da /api/authenticate
    //verifica se a chamada está correta, ou seja, o endereço do fake server é /api/authenticate
    //verifica se é um post e se o json Token está correto
    //verifica se o usuário e senha estão corretos hardcoded
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IndvcyIsInBhc3N3b3JkIjoxNTE2MjM5MDIyfQ.lBiPEfpSQlcYyPv9LudWsGcdMHzbyucfd6RvqxZj1YE';
    
    if (testRequest.request.url.endsWith('/api/authenticate')
        && testRequest.request.method == 'post') {
        
        let body = JSON.parse(testRequest.request.body)
    }


    //fake implementation of /api/orders
    //testa se o endereço da api está correto, ou seja, o endereço é /api/orders
    //testa se é um get
    //testa se o usuário está autorizado a acessar e tem um token para isso

}
