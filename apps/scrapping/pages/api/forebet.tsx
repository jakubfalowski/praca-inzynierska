import { NextApiRequest, NextApiResponse } from "next";
import {Forebet} from '../forebet'

export default async function ForebetAPI(req: NextApiRequest, res: NextApiResponse) {
    // await (await Forebet('Stal Mielec', 'Slask Wroclaw')).map(teams => 
    //     res.json({"info": teams}))
    res.json(await (await Forebet('Stal Mielec', 'Slask Wroclaw')))
    
}