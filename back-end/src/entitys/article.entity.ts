import {
  Entity,
  Column,
  ViewEntity,
  ViewColumn,
  Connection,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  title: string;

  @UpdateDateColumn()
  lastupdated: Date;

  @CreateDateColumn()
  created: Date;
}

@ViewEntity({
  expression: (connection: Connection) =>
    connection
      .createQueryBuilder()
      .select('id')
      .addSelect('title')
      .addSelect('lastupdated')
      .addSelect('created')
      .from(Article, 'article'),
})
export class ArticleBasic {
  @ViewColumn()
  id: number;

  @ViewColumn()
  title: string;

  @ViewColumn()
  lastupdated: Date;

  @ViewColumn()
  created: Date;
}

export class ArticleDto {
  readonly title: string;
  readonly content: string;
}
