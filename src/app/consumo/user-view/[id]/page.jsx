import { redirect } from "next/dist/server/api-utils";

export default async function UserViewID({ params }) {
  let user;

  try {
    const response = await fetch(
      `http://localhost:3000/api/base/base-users/${params.id}`);
    user = await response.json();
    console.log(user);
  } catch (error) {
    console.log(error);
    redirect("/error");
  }

  return (
    <div>
      <h1>Consumo de Usuário</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>EMAIL</th>
              <th>ESTADO</th>
            </tr>
          </thead>
          <tbody>
            {
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.region}</td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Tabelinha</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
