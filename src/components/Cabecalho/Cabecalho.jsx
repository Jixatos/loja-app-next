import Link from "next/link";

export default function Cabecalho(){

    return(
        <div>
            <ul>
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    <Link href="/produtos">PRODUTOS</Link>
                </li>
                <li>
                    <Link href="/usuarios-git">GIT-USERS</Link>
                </li>
                <li>
                    <Link href="/consumo/eletro-view">ELETRÔNICOS</Link>
                </li>
            </ul>
        </div>
    );
}