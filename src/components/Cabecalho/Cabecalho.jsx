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
            </ul>
        </div>
    );
}