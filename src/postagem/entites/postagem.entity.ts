import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Repository, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entities";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TemaService } from "../../tema/services/tema.service";
import { Usuario } from "../../usuario/entities/usuario.entity";


/*@Injectable()
export class PostagemService {
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>,
        private temaService:TemaService
    ){}
}*/

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

    @ManyToOne(()=> Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema



    @ManyToOne(()=> Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;
}