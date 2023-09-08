import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const mountCodesAndValidation = (results: Array<any>, codes: Array<number>) => {
	const validation = codes.map(code => {
		const dbItem = results.find(item => item.code == code);
		if ( dbItem ) {
			delete dbItem.code
			return { [code]: { valid: true, item: dbItem } };
		}
		return { [code]: { valid: false } };
	});
	return validation;
};

export const validateCodes = async (req: Request, res: Response)  => {
	try {
		const prisma = new PrismaClient();
		const { codes } =  req.body;
		const results = await prisma.products.findMany(
			{
				where: {
					code: {
						in: codes,
					}
				}
			}
		);
		const codesAndValidation = mountCodesAndValidation(results, codes);
		res.json(codesAndValidation);
	} catch(e) {
		console.error(e);
		res.status(500).json({ error: 'Erro interno do servidor.' })
	}
}
