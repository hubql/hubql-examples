import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CatController } from './cat.controller';
import { DogController } from './dog.controller';

@Module({
  imports: [],
  controllers: [DogController, CatController],
  providers: [AppService],
})
export class AppModule {}
