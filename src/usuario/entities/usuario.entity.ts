import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Postagem } from "../../postagem/entities/postagem.entity"
import { ApiProperty } from "@nestjs/swagger"

@Entity({ name: "tb_usuarios" })    // Indicando que a classe é uma Entitidade/Model
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number
    @ApiProperty()

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    nome: string
    @ApiProperty()

    @IsEmail()
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    @ApiProperty()
    usuario: string

    @MinLength(8) // indica que o texto tenha no mínimo 8 caracteres
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    @ApiProperty()
    senha: string

    @Column({ length: 5000 })
    @ApiProperty()
    foto: string

    // Indica o relacionamento Um para MUITOS com a Postagem 
    @ApiProperty()
    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[]

}