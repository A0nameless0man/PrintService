import { Module } from '@nestjs/common';
import { CodeController } from './code.controller';
import { CodeService } from './code.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Code, CodeBasic } from 'src/entitys/code.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Code, CodeBasic])],
  controllers: [CodeController],
  providers: [CodeService],
})
export class CodeModule {}
