import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <ul>
        <li className="border-l-0">
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/produtos">PRODUTOS</Link>
        </li>
        <li>
          <Link href="/consumo/eletro-view">ELETRÔNICOS</Link>
        </li>
        <li>
          <Link href="/usuarios-git">GIT-USERS</Link>
        </li>
        <li className="border-r-0">
          <Link href="/consumo/user-view">USUÁRIOS</Link>
        </li>
      </ul>
    </header>
  );
}
