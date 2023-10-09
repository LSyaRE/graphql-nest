import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateActorInput } from './dto/create-actor.input';
import { UpdateActorInput } from './dto/update-actor.input';
import { RepositoryEnum } from '@shared/enums';
import { Actor } from './entities/actor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActorsService {

  constructor(@Inject(RepositoryEnum.ACTOR_REPOSITORY)
  private repository: Repository<Actor>,) { }


  async create(createActorInput: CreateActorInput) {
    const newUser = this.repository.create(createActorInput);
    const userCreated = await this.repository.save(newUser);

    return userCreated;
  }

  async findAll() {
    const response = await this.repository.find({}); 

    if (!response) {
      throw new NotFoundException('Actor not found');
    }

    return response;
  }

  async findOne(id: string) {
    const response = await this.repository.findBy({id}); 

    if (!response) {
      throw new NotFoundException('Actor not found');
    }

    return response;
  }

  async update(id: string, updateActorInput: UpdateActorInput) {

    const response = await this.repository.preload({ id, ...updateActorInput });
    
    if (!response) {
      throw new NotFoundException('Actor not found');
    }

    const responseUpdated = await this.repository.save(response);

    return responseUpdated;
  }

  async remove(id: string) {

    const user = await this.repository.findOneBy({ id });
    
        if (!user) {
          throw new NotFoundException('User not found');
        }
    
        const userDeleted = await this.repository.remove(user);

    return userDeleted;
  }
}
