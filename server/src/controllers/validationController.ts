import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

export const validateCodes = async (req: Request, res: Response)  => {
	try {
		const prisma = new PrismaClient();
		const results = await prisma.products.findMany(
			{
				select: {
					name: true,
				}
			}
		);
		res.json(results);
	} catch(e) {
		console.error(e);
		res.status(500).json({ error: 'Erro interno do servidor.' })
	}
}
