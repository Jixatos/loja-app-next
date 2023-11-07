import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";


export default async function UserView() {

    let usuarios;

    try{
        const response = await fetch("http://localhost:3000/api/base/base-users");
        usuarios = await response.json();
        console.log(usuarios)
    } catch(error){
        console.log(error);
        redirect('/error');
    }

    return(
        <div>
            <h1>Consumo de Usuários</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>NOME</th>
                            <th>EMAIL</th>
                            <th>ESTADO</th>
                        </tr>
                    </thead>
                    
                    {
                        usuarios.map((user)=>(
                            <tbody key={user.id}>
                                <td><Link href={`consumo/user-view/${user.id}`}>{user.nome}</Link></td>
                                <td>{user.email}</td>
                                <td>{user.region}</td>
                            </tbody>
                        ))
                    }
                    <tfoot>
                        <tr>
                            <td colSpan="3">Tabelinha</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}