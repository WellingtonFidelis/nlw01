import knex from '../database/connection';
import { Request, Response, response } from 'express';

// ===========>  
// npm run dev
// na pasta server


class ItensController {
    async index (request: Request, response: Response) {
        //console.log('listagem de usuários');
        //const search = String( request.query.search );
        
        //const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
        /* JSON - Javascript Notation */
        /* response.json({}); to return a string or a variable */
        const items = await knex('items').select('*');
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`,
                // image_url para quando estiver usando o app expo mobile
                //image_url: `http://192.168.33.106:3333/uploads/${item.image}`,
            };
        });
        return response.json(serializedItems);
        // response.send('Hello World');
    }
}

export default ItensController;