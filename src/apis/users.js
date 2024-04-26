const BASE_URL = 'http://localhost:8000/users';

function objectToUrlParams(obj) {
  return Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');
}

async function getById(target, options = null) {
  const queries = objectToUrlParams(options ?? {});
  const res = await fetch(`${BASE_URL}/${target}${queries}`);
  if (!res.ok) throw new Error('fetch is failed');
  const users = await res.json();
  return users;
}

async function get(options = null) {
  const queries = objectToUrlParams(options ?? {});
  // console.log('url', `${[BASE_URL].concat(queries).join('?')}`);
  const res = await fetch(`${[BASE_URL].concat(queries).join('?')}`);
  if (!res.ok) throw new Error('fetch is failed');
  const users = await res.json();
  return users;
}

async function post(content) {
  const res = await fetch(
    BASE_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    },
  );

  if (!res.ok) throw new Error('fetch is failed');
}

async function put(id, content) {
  const res = await fetch(
    `${BASE_URL}/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    },
  );

  if (!res.ok) throw new Error('fetch is failed');
}

const Users = {
  get, post, put, getById,
};

export default Users;
