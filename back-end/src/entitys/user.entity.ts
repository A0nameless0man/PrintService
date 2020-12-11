import {
  Entity,
  Column,
  ViewEntity,
  ViewColumn,
  Connection,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryColumn,
  OneToMany,
} from 'typeorm';

import { Code } from './code.entity';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  passwdHash: string;

  @OneToMany(
    type => Code,
    code => code.user,
  )
  codes?: Code[];

  @UpdateDateColumn()
  lastupdated: Date;

  @CreateDateColumn()
  created: Date;
}
