import { ErrorHandler } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { AppError } from "./app-error";
import { BadAuthorization } from "./bad-authorization";
import { BadInput } from "./bad-input";
import { NotFoundError } from "./not-found.error";

export class AppErrorHandler implements ErrorHandler {

    handleError(err: any) {
        console.log(err.status);
        if (err.status === 400)
            throw new BadInput(err);

        if (err.status === 404) {
            console.log('caiu aqui!');
            alert('Este post já foi deletado');
            throw throwError (() => new NotFoundError());
        }

        if (err.status === 401) {
            console.log('bad autorização')
            throw new BadAuthorization();
        }

        // alert("Um erro inesperado ocorreu");
        // console.log(err);
        throw new AppError(err);

    }



}