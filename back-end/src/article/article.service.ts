import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Article, ArticleBasic, ArticleDto } from '../entitys/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
    @InjectRepository(ArticleBasic)
    private readonly articleBasicRepository: Repository<ArticleBasic>,
  ) {}
  async getArticleList(): Promise<ArticleBasic[]> {
    return this.articleBasicRepository.find();
  }

  async getArticle(id: number): Promise<Article> {
    const article = await this.articleRepository.findOne({ id: id });
    if (article !== undefined) {
      return article;
    } else {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }

  async newArticle(article: ArticleDto): Promise<Article> {
    try {
      const saveresult = await this.articleRepository.save(article);
      return saveresult;
    } catch (e) {
      throw new HttpException(JSON.stringify(e), 500);
    }
  }

  async updateArticle(article: ArticleDto, id: number): Promise<Article> {
    const oldArticle = await this.articleRepository.findOne(id);
    if (oldArticle !== undefined) {
      Object.assign(oldArticle, {
        title: article.title,
        content: article.content,
      });
      return this.articleRepository.save(oldArticle);
    } else {
      throw new HttpException('Target Not Found', HttpStatus.NOT_FOUND);
    }
  }

  async deleteArticle(id: number): Promise<DeleteResult> {
    return this.articleRepository.delete(id);
  }
}
