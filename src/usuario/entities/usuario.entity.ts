import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Postagem } from "../../postagem/entites/postagem.entity"
import { Transform, TransformFnParams } from "class-transformer"

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    id: number

    @Transform(({ value }: TransformFnParams) => value?.trim()) // Remover espaço em branco inicio e fim ...Tranformaçao em valor
    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    nome: string

        @Transform(({ value }: TransformFnParams) => value?.trim()) // Remover espaço em branco inicio e fim ...Tranformaçao em valor
    
    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    usuario: string

        @Transform(({ value }: TransformFnParams) => value?.trim()) // Remover espaço em branco inicio e fim ...Tranformaçao em valor
    
    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false }) 
    senha: string

    @Column({length: 5000 }) 
    foto: string

    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[]

}