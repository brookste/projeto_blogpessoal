/**
 *Esta é uma classe auxiliar, utilizada exclusivamente para realizar o processo de login.
  Como não será mapeada para uma tabela no banco de dados, não possui anotações de persistência.
 */

import { ApiProperty } from "@nestjs/swagger"

export class UsuarioLogin {

    @ApiProperty()
    public usuario: string

    @ApiProperty()
    public senha: string

}