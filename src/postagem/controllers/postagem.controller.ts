import { Controller, Get } from "@nestjs/common";
import { PostagemService } from "../entites/services/postagem.service";
import { Postagem } from "../entites/posatagem.entity";


@Controller("/postagens")
export class PostagemController{

    constructor(
        private readonly postagemService: PostagemService
    ){}

    @Get()
    findAll(): Promise<Postagem[]>{
        return this.postagemService.findAll();
    }
}