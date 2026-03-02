import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from '../posatagem.entity';
import { PostagemService } from './postagem.service';
import { PostagemController } from '../../controllers/postagem.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],
    controllers: [PostagemController],
    providers: [PostagemService], //Ela vai prover um serviço
    exports: [],
})
export class PostagemModule{}