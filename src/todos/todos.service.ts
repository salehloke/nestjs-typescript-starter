import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { BigQueryHelper } from 'src/shared/bigquery.helper';

@Injectable()
export class TodosService {
   create(createTodoDto: CreateTodoDto) {

    return 'This action adds a new todo';
  }

  async findAll() {
    await BigQueryHelper.queryShakespeare()  

    return `This action returns all todos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }


  async queryShakespeare() {
    const {BigQuery} = require('@google-cloud/bigquery');
    const projectId = `node-js-bigquery-demo`
    // Queries a public Shakespeare dataset.

        // Create a client
        const bigqueryClient = new BigQuery({
          projectId
        });

        // The SQL query to run
        const sqlQuery = `SELECT *
            FROM \`bigquery-public-data.samples.shakespeare\`
            WHERE corpus = @corpus
            AND word_count >= @min_word_count
            ORDER BY word_count DESC`;

        const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'US',
        params: {corpus: 'romeoandjuliet', min_word_count: 250},
        };

        // Run the query
        const [rows] = await bigqueryClient.query(options);

        console.log('Rows:');
        rows.forEach(row => console.log(row));
    }
}
