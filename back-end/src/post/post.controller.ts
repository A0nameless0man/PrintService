import { Controller, Get } from '@nestjs/common';
import { PostBasic } from 'src/entitys/post.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getPostList(): Promise<PostBasic[]> {
    return this.postService.getPostList();
  }
}
