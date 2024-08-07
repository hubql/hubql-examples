import { ApiProperty } from '@nestjs/swagger';

export class DogEntity {
  @ApiProperty({
    example: '1',
  })
  id: string;
  @ApiProperty({
    example: 'Joe',
  })
  name: string;
}
export class UpdateDogDto {
  @ApiProperty({
    example: '1',
    type: 'string',
  })
  id: string;
  @ApiProperty({
    example: 'Joe',
    type: 'string',
  })
  name: string;
}
export class UpdateCatDto {
  @ApiProperty({
    example: '1',
    type: 'string',
  })
  id: string;
  @ApiProperty({
    example: 'Felix',
    type: 'string',
  })
  name: string;
}
export class CreateDogDto {
  @ApiProperty({
    example: '1',
    type: 'string',
  })
  id: string;
  @ApiProperty({
    example: 'Joe',
    type: 'string',
  })
  name: string;
}
export class CreateCatDto {
  @ApiProperty({
    example: '1',
    type: 'string',
  })
  id: string;
  @ApiProperty({
    example: 'Felix',
    type: 'string',
  })
  name: string;
}
export class CatEntity {
  @ApiProperty({
    example: '1',
  })
  id: string;
  @ApiProperty({
    example: 'Felix',
  })
  name: string;
}
