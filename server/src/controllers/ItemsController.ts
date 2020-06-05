import { Request, Response } from 'express'
import knex from '../database/connection';

const ItemsController = {
  async index(req: Request, res: Response) {
    const items = await knex('items').select('*');

    const sequelizedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://65c73406272e.ngrok.io/uploads/${item.image}`,
      }
    })

    return res.json(sequelizedItems)
  }
}

export default ItemsController