import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema, Todo } from './schemas/todo.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: TodoSchema.name,
    schema: Todo
  }
])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
