import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: "tb_postagens"}) // create table tb_postagem
export class Postagem{

    @PrimaryGeneratedColumn() //Primary key(i) auto increment  coluna gerada automaticamnete
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim()) // Remover espaço em branco inicio e fim ...Tranformaçao em valor
    @IsNotEmpty() // Força a digitação
    @Column({length: 100, nullable: false}) //varchar(100), not null
    titulo: string;

    
    @Transform(({ value }: TransformFnParams) => value?.trim()) // Remover espaço em branco inicio e fim ...Tranformaçao em valor
    @IsNotEmpty() // Força a digitação
    @Column({length: 1000, nullable: false})
    texto: string;

@UpdateDateColumn() // Atualiza a  data na criação 
    data: Date;
}