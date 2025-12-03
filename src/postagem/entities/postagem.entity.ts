import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
}