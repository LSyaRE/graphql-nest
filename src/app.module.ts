import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLDefinitionsFactory, GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ActorsModule } from './modules/targeting/actors/actors.module';
import { TopicModule } from './modules/targeting/topic/topic.module';
import * as Joi from 'joi';
import { config } from '@config';
import { enviroments } from './enviroments';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@database';
import { MatrizModule } from './modules/targeting/matriz/matriz.module';


@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      subscriptions: {
        'graphql-ws': {
          path: '/graphql',
          onConnect: () => {
            // const { connectionParams, extra } = context;
    
            console.log("Connecting to GraphQL-WS");
            // extra.loaders = createTaskLoaders(tasksService);
          },
        },
        
        'subscriptions-transport-ws': {
          path: '/graphql',
          onConnect: (connectionParams) => {
            console.log("Connecting to GraphQL-Subscriptions");
            return {
              // loaders: createTaskLoaders(tasksService),
            };
          },
        },
      },
    }),

    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_USER: Joi.string().required(),
      }),
    }),
    ActorsModule,
    TopicModule,
    MatrizModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }


