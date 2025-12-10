import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()   // Indica que é uma Classe de Serviço e pode ser inserida/injetada em outras classes diretamente
export class Bcrypt {

    // Função responsavel por criptografar a senha o usuário
    async criptografarSenha(senha: string): Promise<string> {

        let saltos: number = 10;    // Determina a quantidade de vezes que a senha será embaralhada

        return await bcrypt.hash(senha, saltos) 
        // o HASH pega a senha e transforma em um código totalmente diferente cheio de letras e números, garantindo que a senha seja armazenada de forma segura no DB.
    }

    // Função responsavel por comparar a senha criptografa e salva no banco com a sem enviada no login
    async compararSenhas(senhaBanco: string, senhaDigitada: string): Promise<boolean> {

        return bcrypt.compareSync(senhaDigitada, senhaBanco); 
        // verifica se a senha que o usuário digitou é igual à senha verdadeira que está salva no banco
    }

}