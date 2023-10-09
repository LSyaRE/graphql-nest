import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('actors')
export class Actor {
  @Field(() => ID, { description: 'Example field (placeholder)' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  @Column('integer', {
    name: 'example_field',
    comment: 'Example field (placeholder)',
  })
  exampleField: number;
}
