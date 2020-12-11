import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CodeModule } from './code/code.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(
      Object.assign(
        { name: 'default', autoLoadEntities: true, synchronize: true },
        config.db,
      ),
    ),
    CodeModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
