import { CanceledError, AxiosError } from "./services/api-client";
import UserService, { User } from "./services/user-service";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = UserService.getAllUsers();
    request
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error: AxiosError) => {
        if (error instanceof CanceledError) return;
        setErr(error.message);
      })
      .finally(() => setLoading(false));

    return () => cancel();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    UserService.deleteUser(user.id).request.catch((error: AxiosError) => {
      setErr(error.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const user: User = { id: users.length + 1, name: "john smith" };
    setUsers([...users, user]);

    UserService.addUser(user)
      .request.then((res) => {
        setUsers([...users, res.data]);
      })
      .catch((err: AxiosError) => {
        setErr(err.message);
        deleteUser(user);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "1" };

    const newUsers = users.map((u) => (u.id === user.id ? updatedUser : u));
    setUsers(newUsers);

    UserService.updateUser(updatedUser).request.catch((err: AxiosError) => {
      setErr(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {err && (
        <div className="alert alert-danger" role="alert">
          {err}
        </div>
      )}
      {loading && <div className="spinner-border"></div>}
      <div className="container mt-3">
        <button className="btn btn-outline-info my-3" onClick={addUser}>
          Add user
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={nanoid()}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>
                  <div>
                    <button
                      onClick={() => deleteUser(user)}
                      className="btn btn-outline-danger"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => updateUser(user)}
                      className="btn btn-outline-secondary mx-1"
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
