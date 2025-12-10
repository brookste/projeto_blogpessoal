import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') { }

/*
    Guard: São classes responsáveis por determinar se uma requisição pode continuar sua execução.
    Elas interceptam a chamada antes de chegar ao controlador e aplicam verificações, como autenticação ou permissões de acesso

    Iremos chama-lá na controller de autenticação (AuthController) indicando que usaremos o método de autenticação local,
    ou seja, via banco de dados.
*/