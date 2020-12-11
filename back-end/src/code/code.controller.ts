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
import { Code, CodeBasic, CodeDto } from 'src/entitys/code.entity';
import { CodeService } from './code.service';

@Controller('code')
export class CodeController {
  constructor(private readonly codeService: CodeService) {}

  @Get()
  async getCodeList(): Promise<CodeBasic[]> {
    return this.codeService.getCodeList();
  }

  @Post()
  async newCode(@Body() code: CodeDto): Promise<Code> {
    return this.codeService.newCode(code);
  }

  @Get(':id')
  async getCode(@Param('id') id: number): Promise<Code> {
    return this.codeService.getCode(id);
  }

  @Put(':id')
  async updateCode(
    @Body() code: CodeDto,
    @Param('id') id: number,
  ): Promise<Code> {
    return this.codeService.updateCode(code, id);
  }

  @Delete(':id')
  async deleteCode(@Param('id') id: number): Promise<DeleteResult> {
    return this.codeService.deleteCode(id);
  }
}
