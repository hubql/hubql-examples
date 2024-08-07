import { Injectable } from '@nestjs/common';
import { CatEntity, CreateCatDto, DogEntity, UpdateCatDto } from './entity';

@Injectable()
export class AppService {
  getDogs(): DogEntity[] {
    return [
      {
        id: '1',
        name: 'Joe',
      },
      {
        id: '2',
        name: 'Joe 2',
      },
    ];
  }
  getCats(): CatEntity[] {
    return [
      {
        id: '1',
        name: 'Felix',
      },
      {
        id: '2',
        name: 'Felix 2',
      },
    ];
  }
  addDog(dog: CreateCatDto): DogEntity {
    return {
      id: dog.id,
      name: dog.name,
    };
  }
  addCat(cat: CreateCatDto): CatEntity {
    return {
      id: cat.id,
      name: cat.name,
    };
  }
  updateDog(dog: UpdateCatDto): DogEntity {
    return {
      id: dog.id,
      name: dog.name,
    };
  }
  updateCat(cat: UpdateCatDto): CatEntity {
    return {
      id: cat.id,
      name: cat.name,
    };
  }
  getDog(id: string): DogEntity {
    return {
      id,
      name: 'Joe',
    };
  }
  getCat(id: string): CatEntity {
    return {
      id,
      name: 'Felix',
    };
  }
}
