// export interface Todo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

export interface Todo {
  id: number;
  title: string;
}

export interface GetTodo {
  id: number;
  title: string;
  description: string;
  is_done: boolean;
}

export interface PostTodo {
  title: string;
  description: string;
}
