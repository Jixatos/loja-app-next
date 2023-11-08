import { promises as fs} from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request, {params}){

    const file = await fs.readFile(process.cwd() + "/src/app/api/base/database.json", "utf8");

    const jsonUsers = await JSON.parse(file);

    const usuarios = jsonUsers.usuarios

    const id = params.id;

    if (id > 0 && id <= usuarios.length) {
        const usuario = usuarios.find((user) => user.id == id);
        return NextResponse.json(usuario);
    }else{
        return (id == 0 ? NextResponse.json(usuarios) : NextResponse.redirect('http://localhost:3000/error'));
    }
    
}