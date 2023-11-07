import { promises as fs} from 'fs';
import { NextResponse } from 'next/server';

export async function GET(){

    const file = await fs.readFile(process.cwd() + "/src/app/api/base/database.json", "utf8");

    const usuarios = await JSON.parse(file);

    return NextResponse.json(usuarios);
    
}