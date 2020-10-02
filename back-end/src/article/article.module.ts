import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article, ArticleBasic } from 'src/entitys/article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Article, ArticleBasic])],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
