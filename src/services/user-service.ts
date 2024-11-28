import apiClient from "./api-client.ts";

export interface User {
  id: number;
  name: string;
}

class UserService {
  getAllUsers() {
    const controller = new AbortController();

    const request = apiClient.get<User[]>("/users/", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  deleteUser(id: number) {
    const request = apiClient.delete("/users/" + id);

    return { request };
  }

  addUser(user: User) {
    const request = apiClient.post("/users/", user);

    return { request };
  }

  updateUser(user: User) {
    const request = apiClient.patch<User>("/users/" + user.id, user);
    return { request };
  }
}

export default new UserService();
