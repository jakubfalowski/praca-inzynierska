import { NextApiRequest, NextApiResponse } from "next";
import {Forebet} from '../forebet'
import NextCors from 'nextjs-cors';

export default async function ForebetAPI(req: NextApiRequest, res: NextApiResponse) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, 
     });
    res.json(await (await Forebet()))
    
}