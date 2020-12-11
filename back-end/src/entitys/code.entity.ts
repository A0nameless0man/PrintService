import {
  Entity,
  Column,
  ViewEntity,
  ViewColumn,
  Connection,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

import { User } from './user.entity';

@Entity()
export class Code {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @ManyToOne(
    type => User,
    user => user.codes,
  )
  user: User;

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
      .from(Code, 'code'),
})
export class CodeBasic {
  @ViewColumn()
  id: number;

  @ViewColumn()
  title: string;

  @ViewColumn()
  lastupdated: Date;

  @ViewColumn()
  created: Date;
}

export class CodeDto {
  readonly title: string;
  readonly content: string;
}
