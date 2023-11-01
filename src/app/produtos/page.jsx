import Link from "next/link";

export default function Produtos(){

    return(
        <div>
            <h1>PRODUTOS</h1>
            <ul>
                <li>
                    <Link href="/produtos/camisa">CAMISA</Link>
                </li>
                <li>
                    <Link href="/produtos/calca">CALÇA</Link>
                </li>
                <li>
                    <Link href="/produtos/tenis">TÊNIS</Link>
                </li>
                <li>
                    <Link href="/produtos/meia">MEIA</Link>
                </li>
            </ul>
        </div>
    );
}