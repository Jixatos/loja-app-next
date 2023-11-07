import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';

export async function GETID({params}){

    const id = params.id; 

    const file = await fs.readFile(process.cwd() + "/src/app/api/base/database.json", "utf8");

    const usuarios = await JSON.parse(file);

    if(id > 0 && id <= usuario.length) {
        const usuario = usuarios.find((user) => user.id == id);
        return NextResponse.json(usuario);
    } else{
        return(id == 0 ? NextResponse.json(usuarios) : NextResponse.redirect('http://localhost:3000/error'))
    }

}