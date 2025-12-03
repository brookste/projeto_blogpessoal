import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";

@Entity({name: "tb_postagens"}) // Indica que a classe é uma entidade e o nome será "tb_postagens"
export class Postagem {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false}) //nullable -> NOT NULL
    titulo: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn()
    data: Date;

    @ManyToOne(() => Tema, (tema) => tema.postagem, { // Define um relacionamento MUITOS para UM (ManyToOne)

        onDelete: "CASCADE"  // Garante que ao deletar um Tema, todas as Postagens associadas a ele sejam removidas automaticamente
    })
    tema: Tema // Cria o atributo "tema" na entidade atual onde sera criada uma chave estrangeira (FK) no banco de dados
}