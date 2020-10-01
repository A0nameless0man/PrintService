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
export class Post {
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
      .from(Post, 'post'),
})
export class PostBasic {
  @ViewColumn()
  id: number;

  @ViewColumn()
  title: string;

  @ViewColumn()
  lastupdated: Date;

  @ViewColumn()
  created: Date;
}
