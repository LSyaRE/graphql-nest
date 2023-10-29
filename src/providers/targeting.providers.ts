import { DataSource } from 'typeorm';
import { DataSourceEnum, RepositoryEnum } from '@shared/enums';
import { Actor } from 'src/modules/targeting/actors/entities/actor.entity';





export const targetingProviders = [
  {
    provide: RepositoryEnum.ACTOR_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Actor),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.TOPIC_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Actor),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
];
