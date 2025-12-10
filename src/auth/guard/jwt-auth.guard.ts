import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') { }
/*
    Guard: São classes responsáveis por determinar se uma requisição pode continuar sua execução.
    Elas interceptam a chamada antes de chegar ao controlador e aplicam verificações, como autenticação ou permissões de acesso

    Iremos chama-lá na controller de postagem (PostagemController) indicando que usaremos o método de autenticação via JWT,
    ou seja, via token.
*/
