import { ActiveModelSerializer, createServer, Factory, Model, Response } from 'miragejs';
import faker from 'faker';

type Tabulation = {
  name: string;
  email: string;
  created_at: string;
}

type DataFunction = {
  schema: Object;
  request: Object;
}

// criar o servidor
export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      tabulation: Model.extend<Partial<Tabulation>>({})
    },

    factories: {
      tabulation: Factory.extend({
        name(i: number) {
          return `Tabulation ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        created_at() {
          return faker.date.recent(10);
        },
      })
    },

    // gerar dados apartir da inicialização do servidor
    seeds(server) {
      server.createList('tabulation', 200);
    },
    
    // TESTE DE COMMIT
    routes() {
      // * todas as rotas precisam de api/
      this.namespace = 'api';
      this.timing = 750; // faz com que as rotas demorem 750 milesegundos

      // GET TABULATIONS
      this.get('/tabulations',  function (schema, request) { 
        const { page = 1, per_page = 10 } = request.queryParams;
        
        const total = schema.all('tabulation').length;
 
        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);
        
        // corto a listagem do inicio ate o fim 
        const tabulations = this.serialize(schema.all('tabulation'))     
          .tabulations
          .slice(pageStart, pageEnd);

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { tabulations }
        )
      });

      // GET TABULATIONS
      this.get('/tabulations/:id');

      // POST TABULATIONS     
      this.post('/tabulations');

      // reseta as rotas depois de utilizar
      this.namespace = '';
      this.passthrough();
    }
  });

  return server;
}