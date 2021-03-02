export interface Todo {
  id: number;
  text: string;
}

export async function createTodo(todo: Todo): Promise<Todo> {
  return new Promise((resolve, reject) => {
    try {
      // simulate slow server response
      setTimeout(() => {
        resolve(todo);
      }, 500);
    } catch (err) {
      reject(err);
    }
  });
}
