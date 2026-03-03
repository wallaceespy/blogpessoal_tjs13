import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, ILike } from "typeorm";
import { Postagem } from "../posatagem.entity";
import { DeleteResult } from "typeorm/browser";




@Injectable()
export class PostagemService{

    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>,
    ){}

    async findAll(): Promise<Postagem[]>{
        // select * from tb_postagem
        return this.postagemRepository.find();
    }

    async findById(id: number): Promise<Postagem>{
        // SELECT * FROM tb_postagebs WHERE id = ?;
        const postagem = await this.postagemRepository.findOne({
            where:{
                id
            }
        })

        if(!postagem)
            throw new HttpException('Postagem não encontrada!' , HttpStatus.NOT_FOUND);
        return postagem;
    }

    // busca por atributo especifico 

    async findByTitulo(titulo: string): Promise<Postagem[]>{
        return this.postagemRepository.find({
            where:{
                titulo: ILike(`%${titulo}%`)
            }
    })
    }

    async create(postagem: Postagem): Promise<Postagem>{
        // INSERT INTO tb_postagens (titulo, text) VALUES (?, ?);
        return await this.postagemRepository.save(postagem);
    } 
    async update(postagem: Postagem): Promise<Postagem>{

        if (!postagem.id || postagem.id <= 0)
            throw new HttpException("O Id da postagem é inválido!" , HttpStatus.BAD_REQUEST);

        await this.findById(postagem.id);
        // UPDATE  tb_postagens SET titulo= ?,
        //  text = ?,
        // data = CURRENT_TIMESTAMP()
        //WHERE ID = ?;
        return await this.postagemRepository.save(postagem);
    } 

    async delete(id: number): Promise<DeleteResult>{
        await this.findById(id);

        // DELETE tb_postagem FROM id = ?;

        return this.postagemRepository.delete(id);
    }
}





