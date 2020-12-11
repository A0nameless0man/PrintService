import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Code, CodeBasic, CodeDto } from '../entitys/code.entity';

@Injectable()
export class CodeService {
  constructor(
    @InjectRepository(Code)
    private readonly codeRepository: Repository<Code>,
    @InjectRepository(CodeBasic)
    private readonly codeBasicRepository: Repository<CodeBasic>,
  ) {}
  async getCodeList(): Promise<CodeBasic[]> {
    return this.codeBasicRepository.find();
  }

  async getCode(id: number): Promise<Code> {
    const code = await this.codeRepository.findOne({ id: id });
    if (code !== undefined) {
      return code;
    } else {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }

  async newCode(code: CodeDto): Promise<Code> {
    try {
      const saveresult = await this.codeRepository.save(code);
      return saveresult;
    } catch (e) {
      throw new HttpException(JSON.stringify(e), 500);
    }
  }

  async updateCode(code: CodeDto, id: number): Promise<Code> {
    const oldCode = await this.codeRepository.findOne(id);
    if (oldCode !== undefined) {
      Object.assign(oldCode, {
        title: code.title,
        content: code.content,
      });
      return this.codeRepository.save(oldCode);
    } else {
      throw new HttpException('Target Not Found', HttpStatus.NOT_FOUND);
    }
  }

  async deleteCode(id: number): Promise<DeleteResult> {
    return this.codeRepository.delete(id);
  }
}
