import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

/* creating the application */
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

/*  Rota = é o endereço completo da requisição
    Recurso = qual entidade estamos acessando do sistema
    GET: buscar uma ou mais informações do back-end
    POST: criar uma nova informação no back-end
    PUT: atualizar uma informação existente no back-end
    DELETE: deleta... 
    */
/*  Request param: parâmetros que vem na própria rota que identificam o recurso
    Query param: parâmetros opcionais, filtros, paginação
    Request body: parâmetros para criação e atualização de users    
*/
/* const users = new Array (
    'Wellington',
    'Felipe',
    'Ivonete',
    'Angélica'
) */
/* request serve para obter dados do que está acontencedo dentro do app 
    response serve para devolver uma resposta para o borwser */

/* app.get('/users/:id', (request, response) => {
    const id = Number( request.params.id );

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {

    const data = request.body;
    console.log(data);


    const user = {
        name: data.name,
        email: data.email,
    };
    return response.json(user);
}); */
app.use(errors());
app.listen(3333);

// ===========>  
// npm run dev
// na pasta server