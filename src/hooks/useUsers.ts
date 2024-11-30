import { useEffect, useState } from "react";
import UserService, { User } from "../services/user-service.ts";
import { AxiosError, CanceledError } from "../services/api-client.ts";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = UserService.list<User>();
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

  return { users, setUsers, err, setErr, loading };
};

export default useUsers;
