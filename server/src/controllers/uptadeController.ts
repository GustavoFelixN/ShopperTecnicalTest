import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateProductPrice = (req: Request, res: Response) => {
	try {
		const { newPrices } = req.body;
		const updatedPrices = newPrices.map( async (item: any) => {
			await prisma.products.update({
				where: {
					code: item.code,
				},
				data: {
					sales_price: item.new_price,
				},
			});

		});
		res.json(updatedPrices);
	} catch(e) {
		console.error(e);
		res.status(500).json({ 'error': 'Erro interno do servidor.' })
	}
};
