import create from "./HTTPService.ts";

export interface User {
  id: number;
  name: string;
}

export default create("/users/");
