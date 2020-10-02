import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config';
@Module({
  imports: [
    TypeOrmModule.forRoot(
      Object.assign(
        { name: 'default', autoLoadEntities: true, synchronize: true },
        config.db,
      ),
    ),
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
