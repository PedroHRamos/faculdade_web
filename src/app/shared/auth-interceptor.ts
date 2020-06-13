import { UsuarioService } from 'src/app/services/usuario.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private usuario: UsuarioService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.usuario.getAuthorizationToken();
    let authReq: HttpRequest<any> = req;

    if (authToken && !this.usuario.isTokenExpired(authToken)) {
        authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${authToken}`)
          });
    }

    return next.handle(authReq)
        .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erro de client-side ou de rede
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      // Erro retornando pelo backend
      console.error(
        `Código do erro ${error.status}, ` +
        `Erro: ${JSON.stringify(error.error)}`);
    }
    // retornar um observable com uma mensagem amigavel.
    return throwError('Ocorreu um erro, tente novamente');
  }
}
