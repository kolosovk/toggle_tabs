// api функция позволяет избавиться от статических путей

const api = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`).then(res => {
    return res.json();
  });
};

export default api;
