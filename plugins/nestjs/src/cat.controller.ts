import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CatEntity, CreateCatDto, UpdateCatDto } from './entity';

@Controller('cats')
@ApiTags('cats')
export class CatController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all cats',
    description: 'Get all cats in the database',
  })
  getCats(): CatEntity[] {
    return this.appService.getCats();
  }
  @Get('/:id')
  @ApiOperation({
    summary: 'Get cat by id',
    description: 'Get cat by id in the database',
  })
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  getById(@Param('id') id: string): CatEntity {
    return this.appService.getCat(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Add cat',
    description: 'Add cat to the database',
  })
  addCat(@Body() cat: CreateCatDto): CatEntity {
    return this.appService.addCat(cat);
  }
  @ApiOperation({
    summary: 'Update cat',
    description: 'Update cat in the database',
  })
  @Put()
  updateCat(@Body() cat: UpdateCatDto): CatEntity {
    return this.appService.updateCat(cat);
  }
}
