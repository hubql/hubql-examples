import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CreateDogDto, DogEntity, UpdateDogDto } from './entity';

@Controller('dogs')
@ApiTags('dogs')
export class DogController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    operationId: 'getDogs',
    summary: 'Get all dogs',
    description: 'Get all dogs in the database',
  })
  getDogs(): DogEntity[] {
    return this.appService.getDogs();
  }
  @Get('/:id')
  @ApiOperation({
    summary: 'Get dog by id',
    description: 'Get dog by id in the database',
  })
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  getById(@Param('id') id: string): DogEntity {
    return this.appService.getDog(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Add dog',
    description: 'Add dog to the database',
  })
  addDog(@Body() dog: CreateDogDto): DogEntity {
    return this.appService.addDog(dog);
  }

  @Put()
  @ApiOperation({
    summary: 'Update dog',
    description: 'Update dog in the database',
  })
  updateDog(@Body() dog: UpdateDogDto): DogEntity {
    return this.appService.updateDog(dog);
  }
}
