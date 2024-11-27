import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error: AxiosError) => {
        if (error instanceof CanceledError) return;
        setErr(error.message);
      });

    return controller.abort();
  }, []);

  return (
    <>
      {err && (
        <div className="alert alert-danger" role="alert">
          {err}
        </div>
      )}
      <div className="container mt-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
