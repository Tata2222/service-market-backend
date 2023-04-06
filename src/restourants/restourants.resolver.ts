import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restourant } from './entities/restourant.entity';
import { CreateRestourantDto } from './dto/create-restourant.dto';

@Resolver()
export class RestourantsResolver {
  @Query((returns) => [Restourant])
  restourants(): Restourant[] {
    return [];
  }
  @Mutation((returns) => Boolean)
  createRestourant(@Args() CreateRestourantDto: CreateRestourantDto): boolean {
    console.log(CreateRestourantDto);
    return true;
  }
}
