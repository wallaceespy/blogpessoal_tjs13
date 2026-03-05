import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaModule } from '../../../tema/services/tema.module';
import { Postagem } from '../posatagem.entity';
import { PostagemService } from './postagem.service';
import { PostagemController } from '../../controllers/postagem.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
    controllers: [PostagemController],
    providers: [PostagemService], //Ela vai prover um serviço
    exports: [],
})
export class PostagemModule{}