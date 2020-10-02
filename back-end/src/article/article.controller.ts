import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Article, ArticleBasic, ArticleDto } from 'src/entitys/article.entity';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  async getArticleList(): Promise<ArticleBasic[]> {
    return this.articleService.getArticleList();
  }

  @Post()
  async newArticle(@Body() article: ArticleDto): Promise<Article> {
    return this.articleService.newArticle(article);
  }

  @Get(':id')
  async getArticle(@Param('id') id: number): Promise<Article> {
    return this.articleService.getArticle(id);
  }

  @Put(':id')
  async updateArticle(
    @Body() article: ArticleDto,
    @Param('id') id: number,
  ): Promise<Article> {
    return this.articleService.updateArticle(article, id);
  }

  @Delete(':id')
  async deleteArticle(@Param('id') id: number): Promise<DeleteResult> {
    return this.articleService.deleteArticle(id);
  }
}
