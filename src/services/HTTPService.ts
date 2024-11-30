import apiClient from "./api-client.ts";

interface Entity {
  id: number;
}

class HTTPService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  list<T>() {
    const controller = new AbortController();

    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  get<T>(id: number) {
    return apiClient.get<T>(this.endpoint + id);
  }

  destroy(id: number) {
    return apiClient.delete(this.endpoint + id);
  }

  create<T>(obj: T) {
    return apiClient.post<T>(this.endpoint, obj);
  }

  patch<T extends Entity>(obj: T) {
    return apiClient.patch<T>(this.endpoint + obj.id, obj);
  }

  put<T extends Entity>(obj: T) {
    return apiClient.put<T>(this.endpoint + obj.id, obj);
  }
}

const create = (endpoint: string) => new HTTPService(endpoint);
export default create;
