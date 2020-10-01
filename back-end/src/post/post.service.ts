import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { Post, PostBasic } from '../entitys/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    @InjectRepository(PostBasic)
    private readonly postBasicRepository: Repository<PostBasic>,
  ) {}
  async getPostList(): Promise<PostBasic[]> {
    return this.postBasicRepository.find();
  }

  async getPost(id: number): Promise<Post> {
    return this.postRepository.findOne({ id: id });
  }
}
